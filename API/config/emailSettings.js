module.exports = {
  notifications: {
    fromEmail: 'QuoDeck <team@quodeck.com>',
    to: "markcenter@quodeck.com",
    emailTransporter: {
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "devcenter@quodeck.com",
        pass: ""
      }
    },
    contactform: {
      subject: "Welcome To QuoDeck - Content Cost Estimator",
      body: `<!DOCTYPE html>
      <html xmlns="http://www.w3.org/1999/xhtml">
      
      <head>
        <title><!-- #{Subject} --></title>
        <style type="text/css">
          #outlook a {
            padding: 0;
          }
      
          body {
            width: 100% !important;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
          }
      
          .ExternalClass {
            width: 100%;
          }
      
          .ExternalClass,
          .ExternalClass span,
          .ExternalClass font,
          .ExternalClass td,
          .ExternalClass div {
            line-height: 100%;
          }
      
          .ExternalClass p {
            line-height: inherit;
          }
      
          #body-layout {
            margin: 0;
            padding: 0;
            width: 100% !important;
            line-height: 100% !important;
          }
      
          img {
            display: block;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
          }
      
          a img {
            border: none;
          }
      
          table td {
            border-collapse: collapse;
          }
      
          table {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
          }
      
          a {
            color: orange;
            outline: none;
          }
        </style>
      </head>
      
      <body id="body-layout" style="background: #6f6f6f;">
        <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="center" valign="top" style="padding: 0 15px;background: #6f6f6f;">
              <table align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td height="15" style="height: 15px; line-height:15px;"></td>
                </tr>
                <tr>
                  <td width="600" align="center" valign="top"
                    style="border-radius: 4px; overflow: hidden; box-shadow: 3px 3px 6px 0 rgba(0,0,0,0.2);background: #dde1e6;">
                    <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td align="center" valign="top"
                          style="border-top-left-radius: 4px; border-top-right-radius: 4px; overflow: hidden; padding: 0 20px;background: #ffbf00;">
                          <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td height="30" style="height: 30px; line-height:30px;"></td>
                            </tr>
                            <tr>
                              <td align="center" valign="top"
                                style="font-family: Arial, sans-serif; font-size: 32px; mso-line-height-rule: exactly; line-height: 32px; font-weight: 400; letter-spacing: 1px;color: #444141;">
                                Content Cost Estimator
                              </td>
                            </tr>
                            <tr>
                              <td height="30" style="height: 30px; line-height:30px;"></td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top" style="padding: 0 20px;">
                          <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td height="30" style="height: 30px; line-height:30px;"></td>
                            </tr>
                            <tr>
                              <td align="left" valign="top"
                                style="font-family: Arial, sans-serif; font-size: 16px; mso-line-height-rule: exactly; line-height: 22px; font-weight: 400;color: #302f35;">
                                Hi, {someone} left a message for you at Content Cost Estimator
                                <!-- #{SiteName} -->
                              </td>
                            </tr>
                            <tr>
                              <td height="20" style="height: 20px; line-height:20px;"></td>
                            </tr>
                            <tr>
                              <td align="center" valign="top">
                                <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                    <td align="center" valign="top" style="background: #d1d5da;">
                                      <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                          <td height="1" style="height: 1px; line-height:1px;"></td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="top" style="background: #e4e6e9;">
                                      <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                          <td height="2" style="height: 2px; line-height:2px;"></td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td height="20" style="height: 20px; line-height:20px;"></td>
                            </tr>
                            <tr>
                              <td align="center" valign="top"
                                style="font-family: Arial, sans-serif; font-size: 20px; mso-line-height-rule: exactly; line-height: 30px; font-weight: 700;color: #302f35;">
                                <!-- #{Subject} -->
                                A message from Content Cost Estimator site visitor
                              </td>
                            </tr>
                            <tr>
                              <td height="20" style="height: 20px; line-height:20px;"></td>
                            </tr>
                            <tr>
                              <td align="center" valign="top">
                                <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
                                  <!-- #{Start Info} -->
                                  <tr>
                                    <td align="center" valign="top">
                                      <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                          <td width="110" align="left" valign="top"
                                            style="padding: 0 10px 0 0;font-family: Arial, sans-serif; font-size: 14px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;color: #302f35;font-weight: 700;">
                                            Name :</td>
                                          <td align="left" valign="top"
                                            style="font-family: Arial, sans-serif; font-size: 14px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;color: #302f35;">
                                            {NameDescription}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="110" align="left" valign="top"
                                            style="padding: 0 10px 0 0;font-family: Arial, sans-serif; font-size: 14px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;color: #302f35;font-weight: 700;">
                                            Email :</td>
                                          <td align="left" valign="top"
                                            style="font-family: Arial, sans-serif; font-size: 14px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;color: #302f35;">
                                            {EmailDescription}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="110" align="left" valign="top"
                                            style="padding: 0 10px 0 0;font-family: Arial, sans-serif; font-size: 14px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;color: #302f35;font-weight: 700;">
                                            Phone :</td>
                                          <td align="left" valign="top"
                                            style="font-family: Arial, sans-serif; font-size: 14px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;color: #302f35;">
                                            {PhoneDescription}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="110" align="left" valign="top"
                                            style="padding: 0 10px 0 0;font-family: Arial, sans-serif; font-size: 14px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;color: #302f35;font-weight: 700;">
                                            Organization :</td>
                                          <td align="left" valign="top"
                                            style="font-family: Arial, sans-serif; font-size: 14px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;color: #302f35;">
                                            {OrganizationDescription}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="110" align="left" valign="top"
                                            style="padding: 0 10px 0 0;font-family: Arial, sans-serif; font-size: 14px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;color: #302f35;font-weight: 700;">
                                            Designation :</td>
                                          <td align="left" valign="top"
                                            style="font-family: Arial, sans-serif; font-size: 14px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;color: #302f35;">
                                            {DesignationDescription}
                                          </td>
                                        </tr>
                                  </tr>
                                  <!-- #{End Info} -->
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td height="40" style="height: 40px; line-height:40px;"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td height="20" style="height: 20px; line-height:20px;"></td>
          </tr>
          <tr>
            <td width="600" align="center" valign="top">
              <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" valign="top"
                    style="font-family: Arial, sans-serif; font-size: 12px; mso-line-height-rule: exactly; line-height: 18px; font-weight: 400;color: #fff;">
                    This is an automatically generated email, please do not reply.</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        </td>
        </tr>
        </table>
      </body>
      </html>`,
    },
  }
};