import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export const state = () => ({
  twitter: ''
});

export const mutations = {
  setSocialMedia(state, {twitter}) {
    state.twitter = twitter;
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const config = {
        content_type: 'socialMedia',
        order: 'fields.twitter'
      };
      const response = await client.getEntries(config);
      const socialMedia = response.items.map((entry) => {
        return {
          twitter: entry.fields['twitter']
        };
      })[0];
      commit('setSocialMedia', socialMedia);
    } catch (e) {
      console.error(e);
    }
  }
};
