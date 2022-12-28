import React, { useEffect, useState } from 'react'
import {
    Button,
    Form,
    TextArea,
    Icon,
    Modal
} from 'semantic-ui-react'
import JsPDF from "jspdf";
import "jspdf-autotable";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Logo from "../../assets/logo.png";
import 'semantic-ui-css/semantic.min.css';

export default function ContactForm({ openModal, onClose }) {
    const dataDetails = useSelector((state) => state.root.recommendedLevel.list);
    const [name, setName] = useState('');
    const [organization, setOrganization] = useState('');
    const [email, setEmail] = useState('');
    const [designation, setDesignation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [open, setOpen] = useState(openModal)
    const [level, setLevel] = useState();
    const [hrs, setHrs] = useState();

    let handleChange = (e) => {
        if (e.target.name === "name") { setName(e.target.value) }
        if (e.target.name === "organization") { setOrganization(e.target.value) }
        if (e.target.name === "email") { setEmail(e.target.value) }
        if (e.target.name === "designation") { setDesignation(e.target.value) }
        if (e.target.name === "phoneNumber") { setPhoneNumber(e.target.value) }
    }
    let navigate = useNavigate();
    let ccVDdata = useSelector((state) => state.root.dataProportions.dataProp.contentSlideData)
    let vcsVDdata = useSelector((state) => state.root.dataProportions.dataProp.videosTableData);
    let accessVDdata = useSelector((state) => state.root.dataProportions.dataProp.accessibilityAddonsData);
    let presentationVDdata = useSelector((state) => state.root.dataProportions.dataProp.presentationAddonsData);
    let translationVDdata = useSelector((state) => state.root.dataProportions.dataProp.translationAddonsData);
    let estimateVDdata = useSelector((state) => state.root.dataProportions.dataProp.allEstimatedCost);
    let customiseCompData = useSelector((state) => state.root.customData.custom);

    let ccCdata = []
    let vcsCdata = []
    let accessCdata = []
    let estimateCdata = []
    let translationCdata = []
    let translations = []
    let totalCustomCost = []
    let totalBaseContentPer = []
    let presentationCdata = []

    if (Object.keys(customiseCompData).length >= 1) {
        ccCdata = customiseCompData.schema
        vcsCdata = customiseCompData.videos
        accessCdata = customiseCompData.accessibility
        presentationCdata = customiseCompData.presentation
        translationCdata = customiseCompData.translation
        estimateCdata = customiseCompData.estimate
        translations = customiseCompData.translations.value
        totalCustomCost = customiseCompData.totalCost
        totalBaseContentPer = customiseCompData.baseContentPer
    }
    let pdfRender = useSelector((state) => state.root.pdf.pdfData.data);
    let ccData = pdfRender === "viewDetails" ? ccVDdata : ccCdata;
    let vcsData = pdfRender === "viewDetails" ? vcsVDdata : vcsCdata;
    let accessData = pdfRender === "viewDetails" ? accessVDdata : accessCdata;
    let presentationData = pdfRender === "viewDetails" ? presentationVDdata : presentationCdata;
    let translationAddonsData = pdfRender === "viewDetails" ? translationVDdata : translationCdata;
    let estimateCosts = pdfRender === "viewDetails" ? estimateVDdata : estimateCdata;

    let estimateTotal = 0;
    if (Object.keys(estimateCosts).length >= 1) {
        estimateCosts.forEach(element => {
            estimateTotal += element.total
        });
    }
    function formatNum(x) {
        return x.toString().split('.')[0].length > 3 ? x.toString().substring(0, x.toString().split('.')[0].length - 3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + x.toString().substring(x.toString().split('.')[0].length - 3) : x.toString();
    }

    function generatePdf() {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
        const doc = new JsPDF(orientation, unit, size);
        doc.setFontSize(15);
        doc.addImage(Logo, 'PNG', 40, 20, 120, 30);
        const title = "Content Cost Estimator";
        const recommendC = "Content hours: " + hrs
        const recommendLevel = `Module Complexity: Level ${level}`
        const translation = "Translations: " + translations
        const recommendHead = "Recommendation: You Should go for " + hrs + " hours of Level " + level + " modules"
        const costCustom = "Cost (INR) " + totalCustomCost;
        const baseContent = "Total Base Content " + totalBaseContentPer + " %"

        const ccheaders = [["Content Slides", "Proportions", "Screens"]];
        const ccdata = ccData.map(elt => [elt.text, elt.proportion + " %", elt.screens]);

        const vcsheaders = [["Videos", "Proportions", "Minutes"]];
        const vcsdata = vcsData.map(elt => [elt.text, elt.proportion + " %", elt.minutes]);

        const accessheaders = [["Accessibility AddOns in 1 languages", "Available"]];
        const accessdata = accessData.map(elt => [elt.text, elt.checked]);

        const presentHeader = [["Presentation AddOns", "Count"]];
        const presentData = presentationData.map(elt => [elt.text, elt.value]);

        const translationHeader = [["Translation AddOns", "Available"]];
        const translationData = translationAddonsData.map(elt => [elt.text, elt.checked]);

        let langG = translation > 1 ? " languages" : " language"
        const estimateCostHeader = [["Price Estimator", "INR for " + hrs + " hours in " + translations + langG]];
        const estimateCostData = estimateCosts.map(elt => [elt.text, (formatNum((elt.total).toFixed(2)))
        ]);

        let ht = "Total Cost"
        const rhtd = [["What you will get per hour of content:", "Recommended"]];
        const estimateTotalTable = [[ht, formatNum(estimateTotal)]];
        const est = estimateCostData.concat(estimateTotalTable)

        let ccContent = {
            startY: pdfRender === "customise" ? 150 : 110,
            head: ccheaders,
            body: ccdata,
            styles: { halign: 'center' },
            headStyles: { fillColor: [81, 84, 82] }, alternateRowStyles: { fillColor: [231, 215, 252] }, tableLineColor: [69, 69, 69], tableLineWidth: 0.1,
        };
        let vcsContent = {
            startY: pdfRender === "customise" ? 290 : 250,
            head: vcsheaders,
            body: vcsdata,
            styles: { halign: 'center' },
            headStyles: { fillColor: [81, 84, 82] }, alternateRowStyles: { fillColor: [231, 215, 252] }, tableLineColor: [69, 69, 69], tableLineWidth: 0.1,
        };
        let accessContent = {
            startY: pdfRender === "customise" ? 510 : 470,
            head: accessheaders,
            body: accessdata,
            styles: { halign: 'center' },
            headStyles: { fillColor: [81, 84, 82] }, alternateRowStyles: { fillColor: [231, 215, 252] }, tableLineColor: [69, 69, 69], tableLineWidth: 0.1,
        };
        let presentContent = {
            startY: pdfRender === "customise" ? 610 : 570,
            head: presentHeader,
            body: presentData,
            styles: { halign: 'center' },
            headStyles: { fillColor: [81, 84, 82] }, alternateRowStyles: { fillColor: [231, 215, 252] }, tableLineColor: [69, 69, 69], tableLineWidth: 0.1,
        };
        let translationContent = {
            startY: pdfRender === "customise" ? 690 : 650,
            head: translationHeader,
            body: translationData,
            styles: { halign: 'center' },
            headStyles: { fillColor: [81, 84, 82] }, alternateRowStyles: { fillColor: [231, 215, 252] }, tableLineColor: [69, 69, 69], tableLineWidth: 0.1,
        };
        let estimateContent = {
            startY: pdfRender === "customise" ? 910 : 870,
            head: estimateCostHeader,
            body: est,
            styles: { halign: 'center' },
            headStyles: { fillColor: [81, 84, 82] }, alternateRowStyles: { fillColor: [231, 215, 252] }, tableLineColor: [69, 69, 69], tableLineWidth: 0.1,
            willDrawCell: function (data) {
                var rows = data.table.body;
                if (data.row.index === rows.length - 1) {
                    doc.setFillColor(81, 84, 82).setFont(undefined, "bold").setTextColor(255, 255, 255);
                }
            },
        };
        let recommendHeadTable = {
            startY: pdfRender === "customise" ? 130 : 90,
            head: rhtd,
            headStyles: {
                fillColor: [81, 84, 82]
            },
            alternateRowStyles: { fillColor: [231, 215, 252] },
            tableLineColor: [69, 69, 69],
            tableLineWidth: 0.1,
            columnStyles: {
                0: {
                    halign: 'left',
                },
                1: {
                    halign: 'center'
                },
            },
        };

        doc.setFontSize(20).setFont(undefined, "bold").setTextColor(81, 84, 82).text(title, 330, 40);
        pdfRender === "viewDetails" &&
            doc.setFontSize(10).setFont(undefined, "bold").setTextColor(81, 84, 82).text(recommendHead, 40, 80);
        pdfRender === "customise" &&
            doc.setFontSize(10).setFont(undefined, "bold").setTextColor(81, 84, 82).text(recommendLevel, 40, 75);
        pdfRender === "customise" &&
            doc.setFontSize(10).setFont(undefined, "bold").setTextColor(81, 84, 82).text(recommendC, 40, 90);
        pdfRender === "customise" &&
            doc.setFontSize(10).setFont(undefined, "bold").setTextColor(81, 84, 82).text(translation, 40, 105);
        pdfRender === "customise" &&
            doc.setFontSize(10).setFont(undefined, "bold").setTextColor(81, 84, 82).text(formatNum(costCustom), 40, 120);
        doc.autoTable(recommendHeadTable)
        doc.autoTable(ccContent);
        doc.autoTable(vcsContent);
        pdfRender === "customise" &&
            doc.setFontSize(10).setFont(undefined, "bold").setTextColor(81, 84, 82).text(baseContent, 40, 500);
        doc.autoTable(accessContent);
        doc.autoTable(presentContent);
        doc.autoTable(translationContent);
        doc.autoTable(estimateContent);
        doc.save(pdfRender === "viewDetails" ? "Recommended_Data.pdf" : "Customised_Data.pdf")
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const { target } = event;
        navigate("/thank-you");
        generatePdf();

        let formData = Object.fromEntries(new FormData(target));
        try {
            axios.post("http://localhost:8080/api/email/send",
                {
                    user: formData
                }
            ).then((res) => console.log("email"))
        }
        catch (err) {
            console.log("err", err)
        }
    }
    useEffect(() => {
        setOpen(openModal)
        if (Object.keys(dataDetails).length >= 1) {
            setLevel(dataDetails.data.level);
            setHrs(dataDetails.data.hrs);
        }
    }, [openModal, dataDetails])

    return (
        <Modal
            closeIcon={true}
            onClose={() => {
                onClose(false)
                setOpen(false)
            }}
            onOpen={() => setOpen(true)}
            open={open}
            style={{ background: "red" }}
        >
            <Modal.Header>
                Download Quote
            </Modal.Header>
            <Modal.Content >
                <Modal.Description>
                    <Form onSubmit={onSubmit}>
                        <Form.Group widths='equal'>
                            <Form.Input
                                label="Name"
                                required={true}
                                placeholder='Name'
                                name='name'
                                value={name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input
                                label="Organization"
                                required={true}
                                placeholder='Organization Name'
                                name='organization'
                                value={organization}
                                onChange={handleChange}
                            />
                            <Form.Input
                                label="Designation"
                                required={true}
                                placeholder='Enter your designation'
                                name='designation'
                                value={designation}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input
                                label="Work email address"
                                required={true}
                                placeholder='example@quodeck.com'
                                name='email'
                                value={email}
                                onChange={handleChange}
                                pattern="^[a-zA-Z0-9_.]+@(?!gmail|hotmail|rediffmail|outlook|yahoo|zohomail).*\.(com|in|org|net|co.in)\b$"
                                title="Note: Use organization email address"
                            />
                            <Form.Input
                                label="Mobile Number"
                                required={true}
                                placeholder='Enter your number'
                                name='phoneNumber'
                                value={phoneNumber}
                                onChange={handleChange}
                                pattern="[6789][0-9]{9,11}"
                            />
                        </Form.Group>
                        <Form.Field
                            control={TextArea}
                            label='Anything else? (optional)'
                            placeholder='What challenges are you looking to overcome with Quodeck?'
                        />
                        <Modal.Actions>
                            <Button onClick={() => onSubmit} color='yellow'>
                                Submit <Icon name='right chevron' />
                            </Button>
                        </Modal.Actions>
                    </Form>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}