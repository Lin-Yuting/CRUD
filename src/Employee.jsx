import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table,Button,Container,FormGroup,
Modal,ModalHeader,ModalBody,ModalFooter,
} from "reactstrap";

const data = [
    { name: "Neuvillette", email: "neuvillette@gmail.com", atc: "Fontaine", level: "13", role: "SCRUM Master", project: "N/A", status: "Staffed"},
    { name: "Zhongli", email: "zhongli@gmail.com", atc: "Liyue", level: "11", role: "Financial Analyst", project: "N/A", status: "Staffed"},
    { name: "Kaedehara Kazuha", email: "kazuha@gmail.com", atc: "Inazuma", level: "11", role: "QA Automation test Lead", project: "N/A", status: "Staffed"},
    { name: "Venti", email: "venti@gmail.com", atc: "Mondstardt", level: "10", role: "Sales Director", project: "N/A", status: "Staffed"},
    { name: "Chasca", email: "chasca@gmail.com", atc: "Natlan", level: "12", role: "Custom Software Engineering Manager", project: "Microsoft", status: "Jun 18"},
    { name: "Arlecchino", email: "arleccino@gmail.com", atc: "Snezhnaya", level: "13", role: "SCRUM Master", project: "Apple", status: "Dec 20"},
    { name: "Alhaitham", email: "alhaitham@gmail.com", atc: "Sumeru", level: "8", role: "QA test Lead", project: "Starbucks", status: "Sep 10"},
    { name: "Faruzan", email: "faruzan@gmail.com", atc: "Sumeru", level: "7", role: "Quality Manager", project: "N/A", status: "Staffed"},
    { name: "Kinich", email: "kinich@gmail.com", atc: "Natlan", level: "11", role: "Quality Engineering Manager", project: "Tesla", status: "May 21"},
    { name: "Wriothesley", email: "wriothesley@gmail.com", atc: "Fontaine", level: "8", role: "Feature Lead", project: "Google", status: "Nov 10"},
];

class Employee extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            name: "",
            email: "",
            atc: "",
            level: "",
            role: "",
            project: "",
            status: ""
        },
    };

    mostrarModalActualizar = (dato) => {
        this.setState({
            form: dato,
            modalActualizar: true,
        });
    };

    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };

    mostrarModalInsertar = () => {
        this.setState({
            modalInsertar: true,
        });
    };

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };

    editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
            if (dato.name === registro.name) {
                arreglo[contador].name = dato.name;
                arreglo[contador].email = dato.email;
                arreglo[contador].atc = dato.atc;
                arreglo[contador].level = dato.level;
                arreglo[contador].role = dato.role;
                arreglo[contador].project = dato.project;
                arreglo[contador].status = dato.status;
            }
            contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };
       
    eliminar = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
        if (opcion === true) {
            var contador = 0;
            var arreglo = this.state.data;
            arreglo.map((registro) => {
                if (dato.id === registro.id) {
                    arreglo.splice(contador, 1);
                }
                contador++;
            });
            this.setState({ data: arreglo, modalActualizar: false });
        }};
    
    insertar= ()=>{
        var valorNuevo= {...this.state.form};
        valorNuevo.id=this.state.data.length+1;
        var lista= this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
    }

    handleChange = (e) => {
        this.setState({
            form: {...this.state.form,
            [e.target.name]: e.target.value,
            },
        });
    };

    render () {
        return (
            <>
            <Container>
                <br />
                    <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
                <br />
                <br />
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>ATC</th>
                                <th>Level</th>
                                <th>Role</th>
                                <th>Project</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((dato) => (
                                <tr key={dato.id}>
                                    <td>{dato.name}</td>
                                    <td>{dato.email}</td>
                                    <td>{dato.atc}</td>
                                    <td>{dato.level}</td>
                                    <td>{dato.role}</td>
                                    <td>{dato.project}</td>
                                    <td>{dato.status}</td>
                                    <td>
                                        <Button color="primary" onClick={() => this.mostrarModalActualizar(dato)} >Edit</Button>{" "}
                                        <Button color="danger" onClick={()=> this.eliminar(dato)}>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
                
                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Insert Name</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Name: </label>
                            <input className="form-control" name="name" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Email: </label>
                            <input className="form-control" name="email" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>ATC: </label>
                            <input className="form-control" name="atc" type="text" onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Level: </label>
                            <input className="form-control" name="level" type="text" onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Role: </label>
                            <input className="form-control" name="role" type="text" onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Project: </label>
                            <input className="form-control" name="project" type="text" onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Status: </label>
                            <input className="form-control" name="status" type="text" onChange={this.handleChange}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.insertar()} >Insert </Button>
                        <Button className="btn btn-danger" onClick={() => this.cerrarModalInsertar()}
                        >Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalActualizar}>
                    <ModalHeader>
                        <div><h3>Edita Register</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Name:</label>
                            <input className="form-control" name="name" type="text"
                            onChange={this.handleChange} value={this.state.form.name} />
                        </FormGroup>
                        <FormGroup>
                            <label>Email:</label>
                            <input className="form-control" name="email" type="text"
                            onChange={this.handleChange} value={this.state.form.email} />
                        </FormGroup>
                        <FormGroup>
                            <label>atc:</label>
                            <input className="form-control" name="atc" type="text"
                            onChange={this.handleChange} value={this.state.form.atc} />
                        </FormGroup>
                        <FormGroup>
                            <label>Level:</label>
                            <input className="form-control" name="level" type="text"
                            onChange={this.handleChange} value={this.state.form.level} />
                        </FormGroup>
                        <FormGroup>
                            <label>Role:</label>
                            <input className="form-control" name="role" type="text"
                            onChange={this.handleChange} value={this.state.form.role} />
                        </FormGroup>
                        <FormGroup>
                            <label>Project:</label>
                            <input className="form-control" name="project" type="text"
                            onChange={this.handleChange} value={this.state.form.project} />
                        </FormGroup>
                        <FormGroup>
                            <label>Status:</label>
                            <input className="form-control" name="status" type="text"
                            onChange={this.handleChange} value={this.state.form.status} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.editar(this.state.form)} >
                        Edit</Button>
                        <Button color="danger" onClick={() => this.cerrarModalActualizar()} >
                        Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    } 
}

export default Employee