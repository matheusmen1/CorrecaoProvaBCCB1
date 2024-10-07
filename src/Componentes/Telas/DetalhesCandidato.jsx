import { Container } from "react-bootstrap";

export default function DetalhesCandidato(props) {
    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            <img src={props.candidatoSelecionado.avatar}/>
            <p>Eu sou: {props.candidatoSelecionado.nome}</p>
            <p>Email: {props.candidatoSelecionado.email}</p>
            <p>Essas são minhas propostas</p>
            <ul>
                {props.candidatoSelecionado.propostas.map((proposta)=>{
                    return <li>{proposta}</li>

                })}
            </ul>
            <button onClick={()=>{
                props.setDetalharCandidato(false);
            }}>Voltar</button>
        </Container>
    );
}