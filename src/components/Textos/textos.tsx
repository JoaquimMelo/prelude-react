import './textos.css';

interface TextoProps {
texto: string;
}

export default function Texto({ texto }: TextoProps) {
return (
<div>
<p className="texto-principal">{texto}</p>
</div>
);
}