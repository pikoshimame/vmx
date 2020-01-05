import contentful from '~/plugins/contentful';
import MarkdownIt from 'markdown-it';

export const client = contentful.createClient();

export const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true
});

export const getViewImagePath = ({fields}) => {
  if (fields === undefined) {
    return {
      x1: '',
      x2: ''
    };
  }
  return {
    x1: `${fields.file.url}?w=${Math.floor(fields.file.details.image.width / 2)}`,
    x2: fields.file.url
  };
};

export const actions = {
  async nuxtServerInit({dispatch}) {
    dispatch('copyright/fetch');
  }
};
