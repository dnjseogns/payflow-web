import axios from '@/common/axios';

export const cardListApi = {
  reqPostCardList: function(reqParams) {
    return axios.post(
      '/api/settlementCard/select',
      {
        ...reqParams
      }
    ).then((res) => res.data);
  }
};