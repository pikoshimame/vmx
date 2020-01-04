import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export const state = () => ({
  list: []
});

export const mutations = {
  setList(state, list) {
    state.list = list;
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const config = {
        content_type: 'photo',
        order: 'fields.name'
      };
      const response = await client.getEntries(config);
      const list = response.items.map((entry) => {
        return entry.fields.image;
      })[0];
      commit('setList', list);
    } catch (e) {
      console.error(e);
    }
  }
};
