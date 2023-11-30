import "./ParagraphPair.css";

interface ParagraphPairProps {
  paragraph1: string;
  paragraph2: string;
}

function ParagraphPair({ paragraph1, paragraph2 }: ParagraphPairProps) {
  return (
    <div className="paragraph-box">
      <p className="paragraph">{paragraph1}</p>
      <p className="paragraph">{paragraph2}</p>
    </div>
  );
}

export default ParagraphPair;
