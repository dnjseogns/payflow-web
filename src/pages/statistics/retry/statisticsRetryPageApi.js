import axios from '@/common/axios';

export const statisticsRetryPageApi = {
  reqPostStatisticsRetryList: function (reqParams) {
    return axios.post(
      '/api/payment-agg-status/select',
      {
        ...reqParams
      }
    ).then((res) => res.data);
  }
};