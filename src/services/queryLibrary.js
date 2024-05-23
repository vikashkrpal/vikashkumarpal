import {registeredPages} from "../utils/constants";

export const getPageQuery = (pageName) => {
    switch (pageName) {
        case registeredPages.HOMEPAGE:
            return homePageQuery;
        default:
            return homePageQuery;
    }
}

const homePageQuery =  `
      query NewQuery {
        page(id:"cG9zdDo1NA==",idType:ID){
            title
            
            
             homepage {
                        hpHh1
                        hpHeading1
                        hpPc1
                        hpBannerButtonLabel
                        hpBannerButtonLink
                        hpImage1 {
                            mediaItemUrl
                            altText
                        }
                        hpHh2
                        hpHeading2
                        hpPc2

                        # side bar array components
                      hpContentArea1{
                        hpImage2 {
                          altText
                          mediaItemUrl
                        }
                        hpHeading3
                        hpHh3
                        hpPc3
                        hpButtonLabel1
                        hpButtonLink1
                      }

                      #case studies column
                      hpHh4
                      hpHeading4
                      hpPc4


                        # 4 points components
                      hpHh5
                      hpHeading5
                      hpPc5
                      hpButtonLabel2
                      hpButtonLink2
                      hpPointComp{
                        hpPointIcon{
                           altText
                          mediaItemUrl
                        }
                        hpPointName
                        hpPointDescription
                      }

                    }
        }
      }
    `;