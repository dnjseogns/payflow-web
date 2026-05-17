import axios from '@/common/axios';

export const paymentRefundApi = {
  reqPostPaymentRefundList: function(reqParams) {
    return axios.post(
      '/api/refund-handle/select',
      {
        ...reqParams
      }
    ).then((res) => res.data);
  }
};