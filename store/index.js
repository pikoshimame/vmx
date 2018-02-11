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
    const response = await client.getEntries({ content_type: 'copyright' });
    response.items.forEach(entry => {
      commit('setCopyright', entry.fields['copyright']);
    });
  }
};
