import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksAboutUsHeader extends Schema.Component {
  collectionName: 'components_blocks_about_us_headers';
  info: {
    displayName: 'aboutUsHeader';
    icon: 'archive';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    numInfo: Attribute.Component<'blocks.num-info', true>;
    description: Attribute.RichText;
  };
}

export interface BlocksBarDisplay extends Schema.Component {
  collectionName: 'components_blocks_bar_displays';
  info: {
    displayName: 'bar display';
    icon: 'calendar';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface BlocksCard extends Schema.Component {
  collectionName: 'components_blocks_cards';
  info: {
    displayName: 'card';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    cardDescription: Attribute.Text;
    bgImg: Attribute.Media;
    buttonText: Attribute.String;
    buttonIcon: Attribute.Media;
    buttonLink: Attribute.String;
  };
}

export interface BlocksContent extends Schema.Component {
  collectionName: 'components_blocks_contents';
  info: {
    displayName: 'content';
    icon: 'bell';
    description: '';
  };
  attributes: {
    phaseName: Attribute.String;
    leftContent: Attribute.RichText;
    rightContent: Attribute.RichText;
  };
}

export interface BlocksFaqCardContent extends Schema.Component {
  collectionName: 'components_blocks_faq_card_contents';
  info: {
    displayName: 'faqCardContent';
    icon: 'collapse';
  };
  attributes: {
    title: Attribute.String;
    buttonText: Attribute.String;
    buttonLink: Attribute.String;
    description: Attribute.Text;
    buttonIcon: Attribute.Media;
  };
}

export interface BlocksFaqCard extends Schema.Component {
  collectionName: 'components_blocks_faq_cards';
  info: {
    displayName: 'faq card';
    icon: 'bold';
  };
  attributes: {
    description: Attribute.Text;
    buttonLink: Attribute.String;
    buttonText: Attribute.String;
    buttonIcon: Attribute.Media;
  };
}

export interface BlocksFaqContent extends Schema.Component {
  collectionName: 'components_blocks_faq_contents';
  info: {
    displayName: 'faq content';
    icon: 'briefcase';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.String;
  };
}

export interface BlocksFaqMain extends Schema.Component {
  collectionName: 'components_blocks_faq_mains';
  info: {
    displayName: 'faqMain';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.Text;
  };
}

export interface BlocksFaqValue extends Schema.Component {
  collectionName: 'components_blocks_faq_values';
  info: {
    displayName: 'Faq Value';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.Text;
  };
}

export interface BlocksFaq extends Schema.Component {
  collectionName: 'components_blocks_faqs';
  info: {
    displayName: 'faq';
    icon: 'cube';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    card: Attribute.Component<'blocks.card'>;
  };
}

export interface BlocksFeatures extends Schema.Component {
  collectionName: 'components_blocks_features';
  info: {
    displayName: 'features';
    icon: 'code';
    description: '';
  };
  attributes: {
    feature: Attribute.String;
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
    description: '';
  };
  attributes: {
    coloredTitle: Attribute.String;
    title: Attribute.String;
    bgImg: Attribute.Media;
    svg: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface BlocksQuote extends Schema.Component {
  collectionName: 'components_blocks_quotes';
  info: {
    displayName: 'quote';
    icon: 'code';
    description: '';
  };
  attributes: {
    video: Attribute.Media;
    quote: Attribute.RichText;
  };
}

export interface BlocksRoleAndResponsiblity extends Schema.Component {
  collectionName: 'components_blocks_role_and_responsiblity_s';
  info: {
    displayName: 'role and responsiblity ';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    leftCardImg: Attribute.Media;
    rightCardTitle: Attribute.String;
    rightCardIcon: Attribute.Media;
    content: Attribute.Component<'blocks.content', true>;
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

export interface BlocksServiceHeader extends Schema.Component {
  collectionName: 'components_blocks_service_headers';
  info: {
    displayName: 'service header';
    icon: 'clock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    coloredTitle: Attribute.String;
    description: Attribute.Text;
    headerImg: Attribute.Media;
    subHeader: Attribute.Component<'blocks.sub-header'>;
  };
}

export interface BlocksSetupTeam extends Schema.Component {
  collectionName: 'components_blocks_setup_team_s';
  info: {
    displayName: 'setup team ';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    headerImg: Attribute.Media;
    step: Attribute.Component<'blocks.step', true>;
    role: Attribute.Component<'blocks.role', true>;
  };
}

export interface BlocksStepWithImg extends Schema.Component {
  collectionName: 'components_blocks_step_with_imgs';
  info: {
    displayName: 'stepWithImg';
    icon: 'command';
  };
  attributes: {
    img: Attribute.Media;
  };
}

export interface BlocksStep extends Schema.Component {
  collectionName: 'components_blocks_steps';
  info: {
    displayName: 'step';
    icon: 'cog';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface BlocksSubHeader extends Schema.Component {
  collectionName: 'components_blocks_sub_headers';
  info: {
    displayName: 'sub header';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    img: Attribute.Media;
    description: Attribute.RichText;
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

export interface BlocksVisual extends Schema.Component {
  collectionName: 'components_blocks_visuals';
  info: {
    displayName: 'visual';
    icon: 'command';
    description: '';
  };
  attributes: {
    video: Attribute.Media;
    text: Attribute.String;
  };
}

export interface BlocksWhoAreWe extends Schema.Component {
  collectionName: 'components_blocks_who_are_wes';
  info: {
    displayName: 'who-are-we';
    icon: 'pinMap';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface BlocksWhyUs extends Schema.Component {
  collectionName: 'components_blocks_why_us_s';
  info: {
    displayName: 'why us ';
    icon: 'information';
    description: '';
  };
  attributes: {
    bgImg: Attribute.Media;
    coloredTitle: Attribute.String;
    title: Attribute.String;
    svg: Attribute.Media;
    description: Attribute.Text;
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

export interface ElementsIconTitleLink extends Schema.Component {
  collectionName: 'components_elements_icon_title_links';
  info: {
    displayName: 'Icon - Title - Link';
  };
  attributes: {
    text: Attribute.String;
    icon: Attribute.Media;
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

export interface ElementsOurProcess extends Schema.Component {
  collectionName: 'components_elements_our_processes';
  info: {
    displayName: 'our process';
    icon: 'cog';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
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
      'blocks.bar-display': BlocksBarDisplay;
      'blocks.card': BlocksCard;
      'blocks.content': BlocksContent;
      'blocks.faq-card-content': BlocksFaqCardContent;
      'blocks.faq-card': BlocksFaqCard;
      'blocks.faq-content': BlocksFaqContent;
      'blocks.faq-main': BlocksFaqMain;
      'blocks.faq-value': BlocksFaqValue;
      'blocks.faq': BlocksFaq;
      'blocks.features': BlocksFeatures;
      'blocks.home-about-us-content': BlocksHomeAboutUsContent;
      'blocks.home-featured-services': BlocksHomeFeaturedServices;
      'blocks.home-our-work-section': BlocksHomeOurWorkSection;
      'blocks.num-info': BlocksNumInfo;
      'blocks.portfolio': BlocksPortfolio;
      'blocks.process': BlocksProcess;
      'blocks.quote': BlocksQuote;
      'blocks.role-and-responsiblity': BlocksRoleAndResponsiblity;
      'blocks.role': BlocksRole;
      'blocks.service-header': BlocksServiceHeader;
      'blocks.setup-team': BlocksSetupTeam;
      'blocks.step-with-img': BlocksStepWithImg;
      'blocks.step': BlocksStep;
      'blocks.sub-header': BlocksSubHeader;
      'blocks.text-with-content': BlocksTextWithContent;
      'blocks.title-description-video': BlocksTitleDescriptionVideo;
      'blocks.visual': BlocksVisual;
      'blocks.who-are-we': BlocksWhoAreWe;
      'blocks.why-us': BlocksWhyUs;
      'elements.button-with-link': ElementsButtonWithLink;
      'elements.icon-title-link': ElementsIconTitleLink;
      'elements.image-title-description-link': ElementsImageTitleDescriptionLink;
      'elements.image-wit-description': ElementsImageWitDescription;
      'elements.menu-item': ElementsMenuItem;
      'elements.our-process': ElementsOurProcess;
      'elements.test-component': ElementsTestComponent;
      'elements.text-area': ElementsTextArea;
      'elements.text-input': ElementsTextInput;
      'elements.title-description-tags': ElementsTitleDescriptionTags;
    }
  }
}
