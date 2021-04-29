import { useSelector } from 'react-redux';
import { selectDirectoryList } from '../../redux/directory/directory.selector'
import MenuItem from '../menu-item/menu-item';
import './directory-menu.styles.scss';

const DirectoryMenu = () => {
  const sections = useSelector(selectDirectoryList)

  return (
    <div className="directory-menu">
      {sections.map(({id, ...otherSectionProps}) => (
        <MenuItem
          {...otherSectionProps}
          key={id}
        />
      ))}
    </div>
  );
};

export default DirectoryMenu;
