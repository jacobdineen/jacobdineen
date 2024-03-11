import React from 'react';
import PropTypes from 'prop-types';
import {
  IconBookmark,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconArxiv,
  IconResearchGate,
  IconSemanticScholar,
} from '@components/icons';
import IconGmail from './gmail';

const Icon = ({ name }) => {
  switch (name) {
    case 'Bookmark':
      return <IconBookmark />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'Arxiv':
      return <IconArxiv />;
    case 'ResearchGate':
      return <IconResearchGate />;
    case 'SemanticScholar':
      return <IconSemanticScholar />;
      case 'Gmail':
        return <IconGmail />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
