import contentful from '~/plugins/contentful';
import MarkdownIt from 'markdown-it';
const client = contentful.createClient();
const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true
});

export const state = () => ({
  residents: {
    djs: [],
    vjs: []
  }
});

export const getters = {
  residentsHtml({residents}) {
    const djs = residents.djs.map((entry) => {
      return {
        ...entry,
        profile: md.render(entry.profile)
      };
    });
    const vjs = residents.vjs.map((entry) => {
      return {
        ...entry,
        profile: md.render(entry.profile)
      };
    });
    return {
      djs,
      vjs
    };
  }
};

export const mutations = {
  setResidents(state, {djs, vjs}) {
    state.residents = {
      djs,
      vjs
    };
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
      const residents = response.items.reduce((accumulator, currentValue) => {
        if (currentValue.fields['part'] === 'DJ') {
          accumulator.djs.push(currentValue.fields);
        } else if (currentValue.fields['part'] === 'VJ') {
          accumulator.vjs.push(currentValue.fields);
        }
        return accumulator;
      }, {djs: [], vjs: []});
      commit('setResidents', residents);
    } catch (e) {
      console.error(e);
    }
  }
};
