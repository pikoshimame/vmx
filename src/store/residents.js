import {client, md, getViewImagePath} from './';

export const state = () => ({
  items: []
});

export const getters = {
  viewModel({items}) {
    const getViewModel = (fields) => {
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
    };
    const djs = items.filter((fields) => fields.part === 'DJ');
    const vjs = items.filter((fields) => fields.part === 'VJ');
    return {
      djs: djs.map(getViewModel),
      vjs: vjs.map(getViewModel)
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
        content_type: 'residents',
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
