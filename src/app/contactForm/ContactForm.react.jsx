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
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from "../../assets/logo.png";
import 'semantic-ui-css/semantic.min.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [organization, setOrganization] = useState('');
    const [email, setEmail] = useState('');
    const [designation, setDesignation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [open, setOpen] = useState(false)
    const [secondOpen, setSecondOpen] = useState(false)
    const [userData, setUserData] = useState({})

    let navigate = useNavigate();

    const onSubmit = (event) => {
        setSecondOpen(true)
        event.preventDefault();
        const { target } = event;
        console.log('FormData', Object.fromEntries(new FormData(target)));
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

    let handleChange = (e) => {
        if (e.target.name === "name") { setName(e.target.value) }
        if (e.target.name === "organization") { setOrganization(e.target.value) }
        if (e.target.name === "email") { setEmail(e.target.value) }
        if (e.target.name === "designation") { setDesignation(e.target.value) }
        if (e.target.name === "phoneNumber") { setPhoneNumber(e.target.value) }
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
        <Modal
            closeIcon={true}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Show Modal</Button>}
        >
            <Modal.Header>
                Download Quote
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
                            />
                            <Form.Input
                                label="Mobile Number"
                                required={true}
                                placeholder='Enter your number'
                                name='phoneNumber'
                                value={phoneNumber}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Field
                            control={TextArea}
                            label='Anything else? (optional)'
                            placeholder='What challenges are you looking to overcome with Quodeck?'
                        />
                        <Modal.Actions>
                            <Button onClick={() => onSubmit} primary>
                                Submit <Icon name='right chevron' />
                            </Button>
                        </Modal.Actions>
                    </Form>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

export default ContactForm