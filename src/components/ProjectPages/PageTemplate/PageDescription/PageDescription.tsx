interface Props {
  projectDescriptionArray: string[];
}

export const PageDescription = ({ projectDescriptionArray }: Props) => {
  return (
    <div className="md:pl-4 mb-4">
      {projectDescriptionArray.map((descriptionSentence) => (
        <div className="pb-2">{descriptionSentence}</div>
      ))}
    </div>
  );
};
