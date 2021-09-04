const Mailchimp = require('mailchimp-api-v3-next')

const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);


const subscribe = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  try{
    const result = await mailchimp.post({
      path : `/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`,
      body : {
        email_address: email,
        status: "subscribed",
      },
      query: {
        skip_merge_validation: true
      }
    })
    if(result){
      res.status(200).json({ status: result.status })
    }
  }catch(error){
      res.status(500).json({ error: error.message || error.toString() });
  }
  
};

export default subscribe