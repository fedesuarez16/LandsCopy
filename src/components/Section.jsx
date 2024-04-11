import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-10 lg:py-8 xl:py-20 ${crosses ? " " : ""}`
      } 
      ${className || ""}`}
    >
      {children}

      

      {crosses && (
        <>
          
        </>
      )}
    </div>
  );
};

export default Section;
