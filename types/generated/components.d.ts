import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksAboutUsHeader extends Schema.Component {
  collectionName: 'components_blocks_about_us_headers';
  info: {
    displayName: 'aboutUsHeader';
    icon: 'archive';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.Blocks;
    numInfo: Attribute.Component<'blocks.num-info', true>;
  };
}

export interface BlocksHomeAboutUsContent extends Schema.Component {
  collectionName: 'components_blocks_home_about_us_contents';
  info: {
    displayName: 'Home about us content';
    description: '';
  };
  attributes: {
    titleOne: Attribute.String;
    titlTwo: Attribute.String;
    button: Attribute.Component<'elements.button-with-link'>;
    descriptionn: Attribute.RichText;
    numericInfos: Attribute.Component<'blocks.title-description-video', true>;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface BlocksHomeFeaturedServices extends Schema.Component {
  collectionName: 'components_blocks_home_featured_services';
  info: {
    displayName: 'Home featured services';
    description: '';
  };
  attributes: {
    coloredTitle: Attribute.String;
    title: Attribute.String;
    image: Attribute.Media;
    descriptions: Attribute.Component<'elements.text-area', true> &
      Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
  };
}

export interface BlocksHomeOurWorkSection extends Schema.Component {
  collectionName: 'components_blocks_home_our_work_sections';
  info: {
    displayName: 'Home our work section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
    button: Attribute.Component<'elements.button-with-link'>;
    works: Attribute.Component<'elements.image-title-description-link', true>;
    titleTwoo: Attribute.RichText;
    titleTwo: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface BlocksNumInfo extends Schema.Component {
  collectionName: 'components_blocks_num_infos';
  info: {
    displayName: 'numInfo';
    icon: 'layer';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    video: Attribute.Media;
  };
}

export interface BlocksPortfolio extends Schema.Component {
  collectionName: 'components_blocks_portfolios';
  info: {
    displayName: 'portfolio';
    icon: 'command';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    headerText: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    button: Attribute.Component<'elements.button-with-link'>;
  };
}

export interface BlocksProcess extends Schema.Component {
  collectionName: 'components_blocks_processes';
  info: {
    displayName: 'process';
    icon: 'clock';
  };
  attributes: {
    coloredTitle: Attribute.String;
    title: Attribute.String;
    bgImg: Attribute.Media;
    svg: Attribute.Media;
  };
}

export interface BlocksQuote extends Schema.Component {
  collectionName: 'components_blocks_quotes';
  info: {
    displayName: 'quote';
    icon: 'code';
  };
  attributes: {
    img: Attribute.Media;
    quote: Attribute.Blocks;
  };
}

export interface BlocksRoleAndResponsiblity extends Schema.Component {
  collectionName: 'components_blocks_role_and_responsiblity_s';
  info: {
    displayName: 'role and responsiblity ';
  };
  attributes: {
    pahseName: Attribute.String;
    leftText: Attribute.Text;
    rightText: Attribute.Text;
  };
}

export interface BlocksRole extends Schema.Component {
  collectionName: 'components_blocks_roles';
  info: {
    displayName: 'role';
    icon: 'cup';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface BlocksSetupTeam extends Schema.Component {
  collectionName: 'components_blocks_setup_team_s';
  info: {
    displayName: 'setup team ';
    icon: 'attachment';
  };
  attributes: {
    title: Attribute.String;
    headerImg: Attribute.Media;
    step: Attribute.Component<'blocks.step', true>;
    role: Attribute.Component<'blocks.role', true>;
  };
}

export interface BlocksStep extends Schema.Component {
  collectionName: 'components_blocks_steps';
  info: {
    displayName: 'step';
    icon: 'cog';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface BlocksTextWithContent extends Schema.Component {
  collectionName: 'components_blocks_text_with_contents';
  info: {
    displayName: 'TextWithContent';
    icon: 'grid';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.RichText;
    image: Attribute.Media;
  };
}

export interface BlocksTitleDescriptionVideo extends Schema.Component {
  collectionName: 'components_blocks_title_description_videos';
  info: {
    displayName: 'Title - Description - Video';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    video: Attribute.Media;
  };
}

export interface BlocksWhoAreWe extends Schema.Component {
  collectionName: 'components_blocks_who_are_wes';
  info: {
    displayName: 'who-are-we';
    icon: 'pinMap';
  };
  attributes: {
    button: Attribute.Component<'elements.button-with-link', true>;
    description: Attribute.Blocks;
  };
}

export interface ElementsButtonWithLink extends Schema.Component {
  collectionName: 'components_elements_button_with_links';
  info: {
    displayName: 'ButtonWithLink';
    icon: 'link';
  };
  attributes: {
    buttonText: Attribute.String;
    link: Attribute.String;
  };
}

export interface ElementsImageTitleDescriptionLink extends Schema.Component {
  collectionName: 'components_elements_image_title_description_links';
  info: {
    displayName: 'Image - title - Description - link';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
    link: Attribute.String;
  };
}

export interface ElementsImageWitDescription extends Schema.Component {
  collectionName: 'components_elements_image_wit_descriptions';
  info: {
    displayName: 'ImageWithDescription';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface ElementsMenuItem extends Schema.Component {
  collectionName: 'components_menu_item_menu_items';
  info: {
    displayName: 'TextWithLinks';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String & Attribute.Required;
  };
}

export interface ElementsTestComponent extends Schema.Component {
  collectionName: 'components_test_component_test_components';
  info: {
    displayName: 'IconWithLinks';
    icon: 'write';
    description: '';
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
    icon: Attribute.Media;
  };
}

export interface ElementsTextArea extends Schema.Component {
  collectionName: 'components_elements_text_areas';
  info: {
    displayName: 'TextArea';
    description: '';
  };
  attributes: {
    content: Attribute.Text;
  };
}

export interface ElementsTextInput extends Schema.Component {
  collectionName: 'components_elements_text_inputs';
  info: {
    displayName: 'TextInput';
  };
  attributes: {
    TextInput: Attribute.String;
  };
}

export interface ElementsTitleDescriptionTags extends Schema.Component {
  collectionName: 'components_elements_title_description_tags';
  info: {
    displayName: 'Styled Titles -> Description -> Tags';
    icon: 'command';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    coloredTitle: Attribute.String;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.about-us-header': BlocksAboutUsHeader;
      'blocks.home-about-us-content': BlocksHomeAboutUsContent;
      'blocks.home-featured-services': BlocksHomeFeaturedServices;
      'blocks.home-our-work-section': BlocksHomeOurWorkSection;
      'blocks.num-info': BlocksNumInfo;
      'blocks.portfolio': BlocksPortfolio;
      'blocks.process': BlocksProcess;
      'blocks.quote': BlocksQuote;
      'blocks.role-and-responsiblity': BlocksRoleAndResponsiblity;
      'blocks.role': BlocksRole;
      'blocks.setup-team': BlocksSetupTeam;
      'blocks.step': BlocksStep;
      'blocks.text-with-content': BlocksTextWithContent;
      'blocks.title-description-video': BlocksTitleDescriptionVideo;
      'blocks.who-are-we': BlocksWhoAreWe;
      'elements.button-with-link': ElementsButtonWithLink;
      'elements.image-title-description-link': ElementsImageTitleDescriptionLink;
      'elements.image-wit-description': ElementsImageWitDescription;
      'elements.menu-item': ElementsMenuItem;
      'elements.test-component': ElementsTestComponent;
      'elements.text-area': ElementsTextArea;
      'elements.text-input': ElementsTextInput;
      'elements.title-description-tags': ElementsTitleDescriptionTags;
    }
  }
}
