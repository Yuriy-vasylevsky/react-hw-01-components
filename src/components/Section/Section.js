import './Section.css';

export default function Section({ classNames = '', children }) {
  return <section className={`section ${classNames}`}> {children}</section>;
}

// function Box({ type = 'small', classNames = '', styles }) {
//   return (
//     <div className={`box box-${type} ${classNames}`} style={styles}>
//       Box
//     </div>
//   );
// }
