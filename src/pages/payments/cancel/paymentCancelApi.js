import axios from '@/common/axios';

export const paymentCancelApi = {
  reqPostPaymentCancelList: function(reqParams) {
    return axios.post(
      '/api/payment-cancel/select',
      {
        ...reqParams
      }
    ).then((res) => res.data);
  }
};