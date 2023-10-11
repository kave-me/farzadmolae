import { iSection } from "@components/Section/types.section";

export const Compass: React.FC<{ sections: iSection[] }> = ({ sections }) => {
  return (
    <nav className='fixed left-[10px] top-1/2 -translate-y-1/2 '>
      <div className='compass__wrapper'>
        <ul className='compass__list'>
          {sections.map((i) => (
            <li key={i.id} className='compass__item'>
              <a href={`#${i.id}`} className='compass__link'>
                {i.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
