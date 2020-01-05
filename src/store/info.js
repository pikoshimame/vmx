import {client} from './';

export const state = () => ({
  fields: {}
});

export const getters = {
  viewModel({fields}) {
    const date = fields.date || '';
    const time = fields.time || '';
    const datetime = fields.datetime || '';
    const link = fields.link || '';
    return {
      date,
      time,
      datetime,
      link
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
        content_type: 'info',
        order: '-fields.datetime',
        limit: 1
      };
      const response = await client.getEntries(config);
      commit('setFields', response.items[0].fields);
    } catch (e) {
      console.error(e);
    }
  }
};
