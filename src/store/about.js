import contentful from '~/plugins/contentful';
import MarkdownIt from 'markdown-it';
const client = contentful.createClient();
const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true
});

export const state = () => ({
  text: ''
});

export const getters = {
  textHtml({text}) {
    return md.render(text);
  }
};

export const mutations = {
  setText(state, text) {
    state.text = text;
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const config = {
        content_type: 'about'
      };
      const response = await client.getEntries(config);
      const text = response.items.map((entry) => {
        return entry.fields['text'];
      })[0];
      commit('setText', text);
    } catch (e) {
      console.error(e);
    }
  }
};
