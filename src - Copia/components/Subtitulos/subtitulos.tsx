import './subtitulos.css';

interface SubtituloProps {
texto: string;
}

export default function Subtitulo({ texto }: SubtituloProps) {
return (
<div>
<p className="subtitulo-principal">{texto}</p>
</div>
);
}