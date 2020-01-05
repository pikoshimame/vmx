import {client, md, getViewImagePath} from './';

export const state = () => ({
  items: []
});

export const getters = {
  viewModel({items}) {
    const list = items.map((fields) => {
      const name = fields.name || '';
      const credit = fields.credit || '';
      const profile = fields.profile || '';
      const twitter = fields.twitter || '';
      const soundcloud = fields.soundcloud || '';
      const website = fields.website || '';
      const thumbnail = fields.thumbnail || {};
      const image = fields.image || {};
      return {
        name,
        credit,
        profile: md.render(profile),
        twitter,
        soundcloud,
        website,
        thumbnail: getViewImagePath(thumbnail),
        image: getViewImagePath(image)
      };
    });
    return {
      list
    };
  }
};

export const mutations = {
  setItems(state, items) {
    state.items = items;
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const config = {
        content_type: 'guests',
        order: 'fields.displayOrder'
      };
      const response = await client.getEntries(config);
      const items = response.items.map((entry) => {
        return entry.fields;
      });
      commit('setItems', items);
    } catch (e) {
      console.error(e);
    }
  }
};
