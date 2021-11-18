interface Props {
  projectDescriptionArray: string[];
}

export const PageDescription = ({ projectDescriptionArray }: Props) => {
  return (
    <div className="md:pl-4 mb-4">
      {projectDescriptionArray.map((descriptionSentence, i) => (
        <div className="pb-2" key={projectDescriptionArray[0] + i}>
          {descriptionSentence}
        </div>
      ))}
    </div>
  );
};
