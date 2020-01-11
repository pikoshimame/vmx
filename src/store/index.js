import contentful from '~/plugins/contentful';
import MarkdownIt from 'markdown-it';

export const client = contentful.createClient();

export const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true
});

export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('copyright/fetch');
  }
};
