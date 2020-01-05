import {client} from './';

export const state = () => ({
  fields: {}
});

export const getters = {
  viewModel({fields}) {
    const twitter = fields.twitter || '';
    return {
      twitter
    };
  }
};

export const mutations = {
  setFields(state, fields) {
    state.fields = fields;
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const config = {
        content_type: 'socialMedia',
        order: 'fields.twitter',
        limit: 1
      };
      const response = await client.getEntries(config);
      commit('setFields', response.items[0].fields);
    } catch (e) {
      console.error(e);
    }
  }
};
