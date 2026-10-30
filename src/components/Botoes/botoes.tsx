import './botoes.css';

interface BotoesProps {
texto: string;
onClick: () => void;
}

export default function Botoes({ texto, onClick }: BotoesProps) {
return (
<button
         className="botao-primario"
         onClick={onClick}
     >
{texto}
</button>
);
}