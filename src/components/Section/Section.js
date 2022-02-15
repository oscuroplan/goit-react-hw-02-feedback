import propTypes from 'prop-types';

const Section = ({ title, children }) => (
  <>
    <h2>{title}</h2>
    {children}
  </>
);

export default Section;

Section.propTypes = {
  titte: propTypes.string,
  children: propTypes.node.isRequired,
};
