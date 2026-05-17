import axios from '@/common/axios';

export const statisticsListApi = {

  reqPostSummary: function(reqParams) {
    return axios.post(
      '/api/agg-payment/select-summary',
      {
        ...reqParams
      }
    ).then((res) => res.data);
  },

  reqPostDetail: function(reqParams) {
    return axios.post(
      '/api/agg-payment/select-detail',
      {
        ...reqParams
      }
    ).then((res) => res.data);
  }

};