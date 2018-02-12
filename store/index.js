import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export const state = () => ({
  copyright: ''
});

export const mutations = {
  setCopyright (state, copyright) {
    state.copyright = copyright;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const response = await client.getEntries({ content_type: 'copyright', order: '-fields.copyright' });
    commit('setCopyright', response.items.map(entry => {
      return entry.fields['copyright'];
    })[0]);
  }
};
