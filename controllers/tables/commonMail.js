/*'use strict';
(function () { 

    // POST/ INSERT Item by to 
    module.exports.insertitemSQL=function(obj) {
        let sql = `insert into  admin_send_mail(mail_seq_no, mail_from, mail_to, mail_subject, mail_discription,
                   mail_send_dt,  rec_create_dt, rec_create_user) \
                   values (${obj.mail_seq_no}, '${obj.mail_from}', '${obj.mail_to}', '${obj.mail_subject}', '${obj.mail_discription}', 
                   current_timestamp, current_timestamp, user() )`;
        return sql;           
    }
    // GET all from
    module.exports.getallSQL= function() {
        let sql = `SELECT * FROM  admin_send_mail`; 
        return sql;           
    }
     // GET Item by from 
    module.exports.getItemByIDSQL= function(id) {
        let sql = `SELECT * FROM  admin_send_mail WHERE mail_seq_no = ${id}`;
        console.log(" new SQL="+sql);
        return sql;           
    }
    
     // DELETE All from
    module.exports.deleteAllItems= function() {
        let sql = `DELETE FROM  admin_send_mail `;
        return sql;           
    }

    // DELETE Item by from
    module.exports.deleteItemByIDSQL= function(id) {
        let sql = `DELETE FROM  admin_send_mail WHERE mail_seq_no = ${id}`;
        return sql;           
    }
 
    // PUT  update by username -- this is for profile page
    
    module.exports.updatebyIDSQL=function(obj) {
        console.log(obj.mail_seq_no);
        let sql = "update admin_send_mail set mail_to='"            + obj.mail_to           +"' , " +
                                            " mail_subject='"       + obj.mail_subject      +"' , " +
                                            " mail_discription='"   + obj.mail_discription  +"' , " +
                                            " rec_updt_dt='"        + obj.rec_updt_dt       +"' , " +
                                            " rec_updt_user='"      + obj.rec_updt_user     +"'  "    
                                            " where mail_seq_no= "  + obj.mail_seq_no ;    
            return sql; 
    }        

})();  


'use strict';
  const nodemailer = require('nodemailer');
  
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      let testAccount = await nodemailer.createTestAccount();
  
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
              user: testAccount.user, // generated ethereal user
              pass: testAccount.pass // generated ethereal password
          }
      });
  
      // send mail with defined transport object
      let info = await transporter.sendMail({
          from: '"smptims" <smptims@gmail.com>', // sender address
          to: 'sivakumarj00050@gmail.com, srjagath76@gmail.com', // list of receivers
          subject: 'IMS Project details', // Subject line
          text: 'SMPT IMS Project App details', // plain text body
          html: '<b>Hello Android App, Its an android app </b>' // html body
      });
  
      console.log('Message sent: %s', info.from);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  */
main().catch(console.error);