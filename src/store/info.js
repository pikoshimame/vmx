import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export const state = () => ({
  date: '',
  time: '',
  datetime: '',
  link: ''
});

export const mutations = {
  setInfo(state, {date, time, datetime, link}) {
    state.date = date;
    state.time = time;
    state.datetime = datetime;
    state.link = link;
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const config = {
        content_type: 'info',
        order: '-fields.datetime'
      };
      const response = await client.getEntries(config);
      const info = response.items.map((entry) => {
        return {
          date: entry.fields['date'],
          time: entry.fields['time'],
          datetime: entry.fields['datetime'],
          link: entry.fields['link']
        };
      })[0];
      commit('setInfo', info);
    } catch (e) {
      console.error(e);
    }
  }
};
