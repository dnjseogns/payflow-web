import axios from '@/common/axios';

export const paymentFailApi = {
  reqPostPaymentFailList: function(reqParams) {
    return axios.post(
      '/api/payment-fail/select',
      {
        ...reqParams
      }
    ).then((res) => res.data);
  }
};