import axios from '@/common/axios';

export const cardReconciliationApi = {

  reqPostCardReconciliationList: function(reqParams) {

    return axios.post(
      '/api/cardReconciliation/select',
      {
        ...reqParams
      }
    ).then((res) => res.data);
  }
};