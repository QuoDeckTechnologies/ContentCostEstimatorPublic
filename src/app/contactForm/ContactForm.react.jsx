import { React, useState } from 'react'
import {
    Button,
    Form,
    TextArea,
    Header,
    Icon,
    Modal
} from 'semantic-ui-react'
import { jsPDF } from "jspdf";
import Logo from "../../assets/logo.png"
import 'semantic-ui-css/semantic.min.css'

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [companyInfo, setCompanyInfo] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [industry, setIndustry] = useState('');
    const [open, setOpen] = useState(false)
    const [secondOpen, setSecondOpen] = useState(false)
    const [userData, setUserData] = useState({})

    const onSubmit = (event) => {
        setSecondOpen(true)
        event.preventDefault();
        const { target } = event;
        setUserData('FormData', Object.fromEntries(new FormData(target)));
        console.log(userData)
    }

    let handleChange = (e) => {
        if (e.target.name === "name") { setName(e.target.value) }
        if (e.target.name === "companyInfo") { setCompanyInfo(e.target.value) }
        if (e.target.name === "email") { setEmail(e.target.value) }
        if (e.target.name === "jobTitle") { setJobTitle(e.target.value) }
        if (e.target.name === "phoneNumber") { setPhoneNumber(e.target.value) }
        if (e.target.name === "industry") { setIndustry(e.target.value) }
    }

    var generateData = function (amount) {
        var result = [];
        var data =
        {
            coin: "100",
            game_group: "GameGroup",
            game_name: "XPTO2",
            game_version: "25",
            machine: "20485861",
            vlt: "0"
        };
        for (var i = 0; i < amount; i += 1) {
            data.id = (i + 1).toString();
            result.push(Object.assign({}, data));
        }
        return result;
    };

    function createHeaders(keys) {
        var result = [];
        for (var i = 0; i < keys.length; i += 1) {
            result.push({
                'id': keys[i],
                'name': keys[i],
                'prompt': keys[i],
                'width': 65,
                'align': 'center',
                'padding': 0
            });
        }
        return result;
    }

    var headers = createHeaders(["id", "coin", "game_group", "game_name", "game_version", "machine", "vlt"]);

    let generatePdf = () => {
        setSecondOpen(false)
        var doc = new jsPDF('p', 'px', 'a4', 'false');
        doc.addImage(Logo, 'PNG', 140, 20, 160, 40);
        doc.table(75, 80, generateData(20), headers, { autoSize: true });
        doc.save("Details.pdf")
    }
    return (
        <>
            <Modal
                closeIcon={true}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button>Show Modal</Button>}
            >
                <Modal.Header>
                    Contact Us
                </Modal.Header>
                <Modal.Content >
                    <p>We'll Get Back To You Soon</p>
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
                                <Form.Input
                                    label="Company Info"
                                    placeholder='Company Info'
                                    name='companyInfo'
                                    value={companyInfo}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    label="Email"
                                    required={true}
                                    placeholder='Email'
                                    name='email'
                                    value={email}
                                    onChange={handleChange}
                                />
                                <Form.Input
                                    label="Job Title"
                                    placeholder='Job Title'
                                    name='jobTitle'
                                    value={jobTitle}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    label="Phone Number"
                                    placeholder='Phone Number'
                                    name='phoneNumber'
                                    value={phoneNumber}
                                    onChange={handleChange}
                                />
                                <Form.Input
                                    label="Industry"
                                    placeholder='Industry'
                                    name='industry'
                                    value={industry}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Field
                                control={TextArea}
                                label='Tell us more about the project...'
                            />
                            <Modal.Actions>
                                <Button onClick={() => onSubmit} primary>
                                    Proceed <Icon name='right chevron' />
                                </Button>
                            </Modal.Actions>
                        </Form>
                    </Modal.Description>

                </Modal.Content>

                <Modal
                    basic
                    onClose={() => setSecondOpen(false)}
                    onOpen={() => setSecondOpen(true)}
                    open={secondOpen}
                >
                    <Header icon>
                        <Icon name='file alternate' />
                        Download Pdf
                    </Header>
                    <Modal.Actions>
                        <Button basic color='red' inverted onClick={() => setSecondOpen(false)}>
                            <Icon name='remove' /> No
                        </Button>
                        <Button color='green' inverted onClick={() => generatePdf()}>
                            <Icon name='checkmark' /> Yes
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Modal>

        </>
    )
}