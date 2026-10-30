import './titulos.css';
import { useNavigate } from 'react-router-dom';

interface TituloProps {
texto: string;
}

export default function Titulo({ texto }: TituloProps) {
const navigate = useNavigate();

return (
    <div>
        <h1
            className="titulo-principal"
            onClick={() => navigate('/')}
        >
            {texto}
        </h1>
    </div>
);

}