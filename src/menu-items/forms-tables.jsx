// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { Book, PasswordCheck, Next, RowVertical, CpuCharge, TableDocument, Subtitle } from 'iconsax-react';

// type

// icons
const icons = {
  formsTable: Book,
  validation: PasswordCheck,
  wizard: Next,
  layout: RowVertical,
  plugins: CpuCharge,
  reactTables: TableDocument,
  muiTables: Subtitle
};

// ==============================|| MENU ITEMS - FORMS & TABLES ||============================== //

const formsTables = {
  id: 'group-blog-management',
  title: <FormattedMessage id="Blog & Offers" />,
  icon: icons.formsTable,
  type: 'group',
  children: [
    {
      id: 'blog-management',
      title: <FormattedMessage id="Blog Management" />,
      type: 'collapse',
      icon: icons.wizard,
      children: [
        {
          id: 'add-blog',
          title: <FormattedMessage id="Add Blog Article" />,
          type: 'item',
          url: '/forms/blog',
          icon: icons.wizard
        },
        {
          id: 'list-blogs',
          title: <FormattedMessage id="Blog Articles List" />,
          type: 'item',
          url: '/tables/blogs',
          icon: icons.reactTables
        }
      ]
    },
    {
      id: 'special-offer',
      title: <FormattedMessage id="Special Offer Form" />,
      type: 'item',
      url: '/forms/special-offer',
      icon: icons.validation
    }
  ]
};

export default formsTables;
