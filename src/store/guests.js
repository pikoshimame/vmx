import contentful from '~/plugins/contentful';
import MarkdownIt from 'markdown-it';
const client = contentful.createClient();
const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true
});

export const state = () => ({
  list: []
});

export const getters = {
  listHtml({list}) {
    return list.map((entry) => {
      return {
        ...entry,
        profile: md.render(entry.profile)
      };
    });
  }
};

export const mutations = {
  setList(state, list) {
    state.list = list;
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const config = {
        content_type: 'guest',
        order: 'fields.displayOrder'
      };
      const response = await client.getEntries(config);
      const list = response.items.map((entry) => {
        return entry.fields;
      });
      commit('setList', list);
    } catch (e) {
      console.error(e);
    }
  }
};
