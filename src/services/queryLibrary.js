import {registeredPages} from "../utils/constants";

export const getPageQuery = (pageName, slug) => {
    let finalQuery = "";
    switch (pageName) {
        case registeredPages.HOMEPAGE:
            finalQuery = homePageQuery;
            break;
        case registeredPages.BLOG:
            finalQuery = blogPageQuery;
            break;
        case registeredPages.TESTIMONIALS:
            finalQuery = testimonialsPageQuery;
            break;
        case registeredPages.ABOUT:
            finalQuery = aboutPagePageQuery;
            break;
        case registeredPages.PORTFOLIO:
            finalQuery = portfolioPageQuery;
            break;
        case registeredPages.WORK_WITH_ME:
            finalQuery = workWithMePageQuery;
            break;
        case registeredPages.SEO_APPROACH:
            finalQuery = seoApproachPageQuery;
            break;
        case registeredPages.SERVICES:
            finalQuery = servicesPageQuery;
            break;
        case registeredPages.INDUSTRIES:
            finalQuery = industryPageQuery;
            break;
        case registeredPages.CONTACT:
            finalQuery = contactPageQuery;
            break;
        case registeredPages.BOOK_A_STRATEGY_CALL:
            finalQuery = bookAStrategyCallPageQuery;
            break;
        case registeredPages.CASE_STUDY:
            finalQuery = caseStudyPageQuery;
            break;
        case registeredPages.CONSULTING:
            finalQuery = consultingPageQuery;
            break;
        case registeredPages.DETAILED_CASE_STUDY:
            finalQuery = detailedCaseStudyPageQuery(slug);
            break;
        case registeredPages.DETAILED_CONSULTING_SERVICES:
            finalQuery = detailedConsultingServicesPageQuery(slug);
            break;
        case registeredPages.DETAILED_INDUSTRY_SERVICES:
            finalQuery = detailedIndustryServicesPageQuery(slug);
            break;
        case registeredPages.DETAILED_SERVICES:
            finalQuery = detailedServicePageQuery(slug);
            break;
        case registeredPages.AUTHOR:
            finalQuery = authorPageQuery(slug);
            break;
        case registeredPages.CATEGORY:
            finalQuery = categoryPageQuery(slug);
            break;
        case registeredPages.SINGLE_BLOG:
            finalQuery = singlePageQuery(slug);
            break;
        case registeredPages.PRIVACY_POLICY:
            finalQuery = privacyPolicyPageQuery;
            break;
        case registeredPages.TERMS_OF_SERVICE:
            finalQuery = termsOfServicePageQuery;
            break;
        case registeredPages.NOT_FOUND_PAGE:
            finalQuery = notFoundPageQuery;
            break;
        case registeredPages.THANK_YOU:
            finalQuery = thankYouPageQuery;
            break;
        default:
            finalQuery = notFoundPageQuery;
            break;
    }
    return `query NewQuery { ${finalQuery} ${globalComponents} ${testimonialsSlider} }`;
}
const getQueryWithSeoFields = (pageQueryHeader, pageQueryFooter) => `${pageQueryHeader} 
    ${seoDataFields}   
    ${pageQueryFooter}`

const blogListQuery = (size) =>  `
      posts(first: ${size}) {
        edges {
          node {
            title
            excerpt
            slug
            author {
              node {
                name
                slug
                avatar{
                  url
                }
              }
            }
            date
            featuredImage {
              node {
                mediaItemUrl
                altText
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
    `
const seoDataFields = `title
                      dateGmt
                    slug
                    author{
                      node{
                        avatar{
                          url
                        }
                        name
                      }
                    }
                    featuredImage{
                      node{
                        mediaItemUrl
                      }
                    }
                    seo {
                      title
                      canonicalUrl
                      description
                      jsonLd {
                        raw
                      }
                      openGraph {
                        description
                        locale
                        title
                        updatedTime
                      }
                      robots
                    }`
const seoDataSlugFields = `
                    slug
                    seo {
                      title
                      canonicalUrl
                      description
                      jsonLd {
                        raw
                      }
                      openGraph {
                        description
                        locale
                        title
                        updatedTime
                      }
                      robots
                    }`
const globalComponents = `siteOption(id: "global-components", idType: SLUG) {
                            siteOptions {
                                serviceCards{
                                  serviceIcon{
                                    mediaItemUrl
                                    altText
                                  }
                                  serviceName
                                  serviceDescription
                                  servicePoints{
                                    servicePointName
                                  }

                                }
                                
                                clientsLogoHeading
                                clientLogo {
                                    mediaItemUrl
                                    altText
                                }
                                
                                # Result Highlight
                                resultsHighlightHeading
                                  resultsHighlightPara
                                  deliveredNumbers{
                                    highlightNumbers
                                    highlightTxt
                                  }
                              
                                logo {
                                    mediaItemUrl
                                    altText
                                }
                                favicon {
                                  mediaItemUrl
                                  altText
                                }
                                head
                                body
                                siteAbout
                                address
                                email
                            
                                facebook
                                instagram
                                twitter
                                linkedin


                                #Case Study
                                caseStudyHeadingHighlight
                                caseStudyHeading
                                caseStudyParagraphContent
                                caseStudyButtonLabel
                                caseStudyButtonLink
                                caseStudyCards{
                                  caseStudyCardImage{
                                    mediaItemUrl
                                    altText
                                  }
                                  caseStudyCardCompanyName
                                  caseStudyCardHeading
                                  caseStudyCardDescription
                                  caseStudyHighlightResults{
                                    caseStudyCardResultNumbers
                                    caseStudyCardResultHighlightText
                                  }
                                }
                                
                                #Vikash CTA
                                  ctaHighlightTxt
                                  ctaHeading
                                  ctaParaContent
                                  ctaImage{
                                   mediaItemUrl
                                   altText
                                  }
                                  ctaButtonLabel
                                  ctaButtonLink
                                    
                                    #seen on
                                  seenOnHeading
                                  seenOnDescription
                                  seenOnImages{
                                    mediaItemUrl
                                    altText
                                  }
                                  
                                  #news letter
                                  newsletterHeading
                            }
                        }`
const testimonialsSlider = ` testimonialSlider: siteOption(id:"client-testimonials", idType: SLUG){
    clientTestimonials{
        testimonialHeadingHighlight
        testimonialHeading
        testimonialParagraphContent
        testimonialCards {
            clientName
            clientDesignation
            testimonialContent
            clientIcon {
                mediaItemUrl
                altText
            }
        }
    }
  }`

const homePageQuery = getQueryWithSeoFields(`page(id:"cG9zdDo1NA==",idType:ID){ `, ` homepage {
                        hpHh1
                        hpHeading1
                        hpPc1
                        hpCtaButton1 {
                          hpCtaButtonLabel1
                          hpCtaButtonLink1
                        }
                        hpImage1 {
                            mediaItemUrl
                            altText
                        }
                        hpHh2
                        hpHeading2
                        hpPc2
                        hpCtaButton1{
                        hpCtaButtonLabel1
                        hpCtaButtonLink1
                        }

                        # side bar array components
                      hpContentArea1{
                        hpImage2 {
                          altText
                          mediaItemUrl
                        }
                        hpHeading3
                        hpHh3
                        hpPc3
                        hpCtaButton2 {
                          hpCtaButtonLabel2
                          hpCtaButtonLink2
                        }
                      }

                      #case studies column
                      hpHh4
                      hpHeading4
                      hpPc4
                      hpCtaButton3 {
                          hpCtaButtonLabel3
                          hpCtaButtonLink3
                        }

                        # 4 points components
                      
                      hpPointComp{
                        hpPointIcon{
                           altText
                          mediaItemUrl
                        }
                        hpPointName
                        hpPointDescription
                      }

                    }
        } ${blogListQuery(3)}` );

const blogPageQuery = `
${getQueryWithSeoFields(
    'page(id:"cG9zdDozNDQ=",idType:ID){', `blog{
                          #banner
                          blogBannerPc

                          # Newsletter Section
                          blogNewsletterHeading
                          blogNewsletterPc
                          blogImage1{
                            altText
                            mediaItemUrl
                          }

                          #Blog List
                          blogHeading
                          blogPc
                        } 
                       } ${blogListQuery(50)}`
)}`
const caseStudyPageQuery = `
${getQueryWithSeoFields(
    'page(id:"cG9zdDoxODUw",idType:ID){', `caseStudy{
                                         csBannerPc
                                      
                                      #Impact Highlights
                                         csHeading1
                                          csPc1
                                      csImpactHighlights{
                                        csImpactNumber
                                        csImpactText
                                      }
                                      
                                      #Content With Side Image
                                           csHighlightPoints{
                                            csHighlightPoint
                                            csDescription
                                          }
                                          csButton {
                                            csButtonLabel
                                            csButtonLink
                                          }
                                          csImage{
                                            mediaItemUrl
                                          }
                                
                                          #Case Studies Section
                                          csHeading2
                                          csPc2
                                          
                                          #case study section
                                          csHeading3
                                          csPc3
                                           csCtaButton {
                                              csCtaButtonLabel
                                              csCtaButtonLink
                                            }
                                
                                    }  
                       }
                        caseStudies(first:100){
                            edges{
                              node{
                                title
                                slug
                                 featuredImage{
                                  node{
                                    mediaItemUrl
                                      altText
                                  }
                                }
                                detailedCaseStudy{
                                  #Banner Section
                                          dcsBannerPc
                                          
                                          #Impact Numbers
                                          dcsHeading1
                                          dcsPc1
                                          dcsImpactNumbers {
                                            dcsHighlightNumber
                                            dcsHighlightText
                                          }
                                          
                                          #Client Review Section
                                          dcsHeading2
                                          dcsPc2
                                          dcsClientIcon{
                                            mediaItemUrl
                                            altText
                                          }
                                          dcsClientName
                                          dcsCompanyName
                                          dcsClientDesignation
                                          dcsClientReviewContent
                                          
                                          #Content Area
                                          dcsCaseStudyContent {
                                            dcsHeading3
                                            dcsPc3
                                            dcsImage{
                                              mediaItemUrl
                                              altText
                                            }
                                            dcsCtaButton {
                                              dcsButtonLabel
                                              dcsButtonLink
                                            }
                                          }
                                }
                              }
                            }
                          }
                        
                        ${blogListQuery(3)}`
)}`

const categoryPageQuery = (slug) => `${getQueryWithSeoFields(
    'page(id:"cG9zdDozNDQ=",idType:ID){', `blog{
                          #banner
                          blogBannerPc

                          # Newsletter Section
                          blogNewsletterHeading
                          blogNewsletterPc
                          blogImage1{
                            altText
                            mediaItemUrl
                          }

                          #Blog List
                          blogHeading
                          blogPc
                        } 
                       } 
                        category(id: "${slug}", idType: SLUG) { 
                        name
                        description
                        ${blogListQuery(50)}
                        
                        ${seoDataSlugFields} 
                        
                        }
                       
                       `
)}`
const authorPageQuery = (slug) => `${getQueryWithSeoFields(
    'page(id:"cG9zdDozNDQ=",idType:ID){', `blog{
                          #banner
                          blogBannerPc

                          # Newsletter Section
                          blogNewsletterHeading
                          blogNewsletterPc
                          blogImage1{
                            altText
                            mediaItemUrl
                          }

                          #Blog List
                          blogHeading
                          blogPc
                        } 
                       } 
                        user(id: "${slug}", idType: SLUG){
                        authorPage{
                          apBg{
                            mediaItemUrl
                            altText
                          }
                          apImage{
                            mediaItemUrl
                            altText
                          }
                          apAbout
                          apCtaButton {
                            apButtonLabel
                            apButtonLink
                          }
                          apSocialMediaProfiles {
                            apFacebook
                            apInstagram
                            apLinkedin
                            apTwitterX
                          }
                          
                          #Above Blogs
                          apHeading
                          apParagraphContent
                        } 
                        name
                        description
                        avatar{
                          url
                        }
                        ${blogListQuery(50)}
                        
                        ${seoDataSlugFields} 
                        
                        }
                       `
)}`
const singlePageQuery = (slug) => `${getQueryWithSeoFields(
    'page(id:"cG9zdDozNDQ=",idType:ID){', `blog{
                          #banner
                          blogBannerPc

                          # Newsletter Section
                          blogNewsletterHeading
                          blogNewsletterPc
                          blogImage1{
                            altText
                            mediaItemUrl
                          }

                          #Blog List
                          blogHeading
                          blogPc
                        }
                      
                       } 
                        ${blogListQuery(3)}
                        post(id: "${slug}", idType: SLUG)                       { 
                        title
                        content
                        excerpt
                         date
                         blogPost{
                            blogPostCtaButton{
                                blogPostButtonLabel
                                blogPostButtonLink
                             }
                         }
                        featuredImage{
                          node{
                           altText
                            mediaItemUrl
                          }
                        }
                        categories {
                          nodes {
                            name
                            slug
                          }
                        }
            
                        author{
                          node{
                            name
                            slug
                            avatar{
                              url
                            }
                            description
                          }
                        }
                       
                        ${seoDataSlugFields} 
                        
                        }
                       `
)}`

const testimonialsPageQuery = getQueryWithSeoFields(
    `page(id:"cG9zdDoxNzg1",idType:ID){`,
    `
        testimonials{
      #banner
      tpBannerPc
      
      #Content Area
      tpHeading1
      tpPc1
      tpButton {
        tpButtonLabel
        tpButtonLink
      }
      tpTestimonialCard {
        tpClientName
        tpDesigCoName
        tpReviewContent
        tpClientImage {
          mediaItemUrl
          altText
        }
      }
    }
    
    }`
)
const aboutPagePageQuery = getQueryWithSeoFields(
    ` page(id:"cG9zdDozMjM=",idType:ID){ `,
    ` aboutUs{
      #banner
      abtBannerPc
      
      #What Sets Me Apart?
      abtHeading1
      abtPc1
      abtButton1 {
        abtButtonLabel1
        abtButtonLink1
      } 
      
      abtBenefitsCard{
        abtBenefitsIcon {
          mediaItemUrl
          altText
        }
        abtBenefitsHeading
        abtBenefitsParagraph
        abtBenefitPoints {
          abtBenefitPointsName
        }
      }
      
      #Content With Side Image
      abtHeading2
      abtPc2
      abtPointsSection{
        abtPointName
        abtPointDescription
      }
      
      abtButton2 {
        abtButtonLabel2
        abtButtonLink2
      }
      abtImage1{
        mediaItemUrl
        altText
      }
    }
  
  }`
)
const portfolioPageQuery = getQueryWithSeoFields(
    `  page(id:"cG9zdDozNDI=",idType:ID){  `,
    `portfolio{
        #banner
        portfolioBannerPc

        #content with side image
        portfolioHeading1
        portfolioPc1
        portfolioHighlightPoints {
          portfolioHpDescription
          portfolioHpName
        }
        portfolioButton {
          portfolioButtonLabel
          portfolioButtonLink
        }
        portfolioImage1{
          mediaItemUrl
          altText
        }

          #Portfolio List
          portfolioHeading2
          portfolioPc2
          portfolioCtaButton{
              portfolioCtaButtonLabel
              portfolioCtaButtonLink
          }
          portfolioList {
            portfolioCompanyName
            portfolioListDescription
            portfolioListHeading
            portfolioListImage{
                    mediaItemUrl
                    altText
                  }
                   portfolioHighlights {
                    portfolioHighlightNumber
                    portfolioHighlightText
                  }
          }
        



      }
  
  }
    caseStudies(first:100){
                            edges{
                              node{
                                title
                                slug
                                 featuredImage{
                                  node{
                                  altText
                                    mediaItemUrl
                                  }
                                }
                                detailedCaseStudy{
                                  #Banner Section
                                          dcsBannerPc
                                          
                                          dcsCompanyName
                                          
                                          #Impact Numbers
                                          dcsHeading1
                                          dcsPc1
                                          dcsImpactNumbers {
                                            dcsHighlightNumber
                                            dcsHighlightText
                                          }
                                          
                                          #Client Review Section
                                          dcsHeading2
                                          dcsPc2
                                          dcsClientIcon{
                                            mediaItemUrl
                                            altText
                                          }
                                          dcsClientName
                                          dcsCompanyName
                                          dcsClientDesignation
                                          dcsClientReviewContent
                                          
                                          #Content Area
                                          dcsCaseStudyContent {
                                            dcsHeading3
                                            dcsPc3
                                            dcsImage{
                                              mediaItemUrl
                                              altText
                                            }
                                            dcsCtaButton {
                                              dcsButtonLabel
                                              dcsButtonLink
                                            }
                                          }
                                }
                              }
                            }
                          }
  
  `
)
const workWithMePageQuery = getQueryWithSeoFields(
    ` page(id:"cG9zdDoxODM1",idType:ID){  `,
    `  workWithMe{
          #banner
          wwmBannerPc

          #content with side image
          wwmHeading1
          wwmPc1
          wwmContentPoints {
            wwmContentPointHeading
            wwmContentPointDesc
          }
          wwmButton1 {
            wwmButtonLabel1
            wwmButtonLink1
          } 

          wwmImage1{
            mediaItemUrl
            altText
          }

          #Cards Comp
          wwmHeading2
          wwmPc2
          wwmCardCompCtaButton{
            wwmCardCompCtaButtonLabel
            wwmCardCompCtaButtonLink
          }
          wwmCards{
            wwmCardIcon{
              mediaItemUrl
              altText
            }
            wwmCardHeading
            wwmCardDescription
            wwmCardPoints {
              wwmCardPointName
            }
          }

          #Comp With 4 Points
          wwmHeading3
          wwmPc3
          wwmButton2 {
            wwmButtonLabel2
            wwmButtonLink2
          }
          wwmPoints{
            wwmPointIcon {
              mediaItemUrl
              altText
            }
            wwmPointName
            wwmPointDescription
          }
          
          #FAQ Section
          wwmHeading4
          wwmPc4
          wwmFaqCtaButton{
          wwmFaqCtaButtonLabel
          wwmFaqCtaButtonLink
          }
          wwmFaqs{
          wwmFaqQuestion
          wwmFaqAnswer
          }
      }
  
  }`
)
const servicesPageQuery = getQueryWithSeoFields(
    ` page(id:"cG9zdDoxNDQ=",idType:ID){`,
    `  services {
      #banner
      servicesBannerPc
      
      #content with side image
      servicesHeading1
      servicesPc1
      servicesPcHighlightPoints {
        servicesPcPointDescription
        servicesPcPointName
      }
      servicesCtaButton1 {
        servicesCtaButtonLabel1
        servicesCtaButtonLink1
      }
      servicesImage1 {
        mediaItemUrl
        altText
      }
      
      #Service Cards Section
      servicesHeading2
      servicesPc2
      servicesCardSecCtaButton{
      servicesCardSecCtaButtonLabel
      servicesCardSecCtaButtonLink
      }
      serviceCardsComp {
        servicesCardCompServiceDescription
        servicesCardCompServiceName
        servicesCardCompIcon{
          mediaItemUrl
          altText
        }
        servicesCardCompHighlightPoints {
          servicesCardCompHighlight
        }
      }
      
      #FAQ Section
      servicesHeading3
      servicesPc3
      servicesFaqCtaButton{
      servicesFaqCtaButtonLabel
      servicesFaqCtaButtonLink
      }
      servicesFaqs {
        servicesFaqAnswer
        servicesFaqQuestion
      }
    }
    
  }`
)
const seoApproachPageQuery = getQueryWithSeoFields(
    ` page(id: "cG9zdDoxODk4", idType: ID) {`,
    ` seoApproach {
      #banner
      approachBannerPc
      
      #content with side image
      approachHeading1
      approachPc1
      approachPc1Hp {
        approachPc1HpDescription
        approachPc1HpName
      } 
      approachCtaButton1 {
        approachButtonLabel1
        approachButtonLink1
      } 
      approachImage1 {
        mediaItemUrl
        altText
      }
      
      #4 Points Comp.
      approachHeading2
      approachPc2
      approachCtaButton2 {
        approachButtonLabel2
        approachButtonLink2
      }
      approachPointsCard{
        approachPointIcon{
          mediaItemUrl
          altText
        }
        approachPointHeading
        approachPointDescription
      }
      
      #Highlights List
      approachHeading3
      approachPc3
      approachCtaButton3 {
        approachButtonLabel3
        approachButtonLink3
      }
      approachHighlightsList {
        approachHighlightDescription
        approachHighlightName
      }
      
      #Comp. Above Testimonials
      approachHeading4
      approachPc4
      approachCtaButton4 {
        approachButtonLabel4
        approachButtonLink4
      }
      approachImage2{
        mediaItemUrl
        altText
      }
    }
    
  }`
)
const contactPageQuery = getQueryWithSeoFields(
    ` page(id: "cG9zdDozMjU=", idType: ID) { `,
    ` contact{
      contactHeading
      contactPc
    }
    
  }`
)
const bookAStrategyCallPageQuery = getQueryWithSeoFields(
    ` page(id: "cG9zdDozMzY1", idType: ID) { `,
    ` bookAstrategyCall{
      bascHeading
      bascPc
    }
    
  } 
  `
)
const privacyPolicyPageQuery = getQueryWithSeoFields(
    ` page(id:"cG9zdDozMzI=", idType:ID){ `,
    `  privacyPolicy{
      privacyPolicyBannerParagraph
    }
    content
    
  }`
)
const termsOfServicePageQuery = getQueryWithSeoFields(
    ` page(id:"cG9zdDozMzQ=", idType:ID){ `,
    `  termsOfService{
      tncBannerParagraph
    }
    content
    
  }`
)
const notFoundPageQuery = getQueryWithSeoFields(
    `  page(id:"cG9zdDozNDA=", idType:ID){ `,
    ` }`
)
const thankYouPageQuery = getQueryWithSeoFields(
    `  page(id:"cG9zdDozMjc=", idType:ID){ `,
    ` 
    thankYou {
        thanksHeading1
        thanksParagraphContent1
        thanksImage1{
        mediaItemUrl
        altText
        }
        
        thanksHeading2
        thanksParagraphContent2
        thanksCtaButton{
            thanksButtonLabel
            thanksButtonLink
        }
    }
    }`
)
const consultingPageQuery = getQueryWithSeoFields(
    ` page(id: "cG9zdDoxNzM4", idType: ID) {`,
    ` 
    consulting {
      #banner
      consultingBannerPc
      consultingHeading1
      consultingPc1
      consultingPcHighlightPoints {
        consultingPcPointDescription
        consultingPcPointName
      }
      consultingCtaButton1 {
        consultingCtaButtonLabel1
        consultingCtaButtonLink1
      }
      consultingImage1 {
        mediaItemUrl
        altText
      }
      
      consultingHeading2
      consultingPc2
      consultingCardSecCtaButton {
        consultingCardSecCtaButtonLabel
        consultingCardSecCtaButtonLink
      }
      consultingCardsComp {
        consultingCardCompServiceDescription
        consultingCardCompServiceName
        consultingCardCompIcon{
          mediaItemUrl
          altText
        }
        consultingCardCompHighlightPoints{
          consultingCardCompHighlight
        }
      }
      
      consultingHeading3
      consultingPc3
      consultingFaqs {
        consultingFaqAnswer
        consultingFaqQuestion
      }
      consultingFaqCtaButton{
      consultingFaqCtaButtonLabel
      consultingFaqCtaButtonLink
      }
    }
    
  }`
)
const industryPageQuery = getQueryWithSeoFields(
    `   page(id:"cG9zdDoxNzQw", idType:ID){`,
    ` 
    industries{
      industriesBannerPc
      
      industriesHeading1
      industriesPc1
      industriesPcHighlightPoints {
        industriesPcPointDescription
        industriesPcPointName
      }
      industriesCtaButton1 {
        industriesCtaButtonLabel1
        industriesCtaButtonLink1
      }
      industriesImage1 {
        mediaItemUrl
        altText
      }
      
      industriesHeading2
      industriesPc2
      industriesCardSecCtaButton {
        industriesCardSecCtaButtonLabel
        industriesCardSecCtaButtonLink
      }
      industriesCardsComp {
        industriesCardCompServiceDescription
        industriesCardCompServiceName
        industriesCardCompIcon{
          mediaItemUrl
          altText
        }
        industriesCardCompHighlightPoints{
          industriesCardCompHighlight
        }
      }
      
      industriesHeading3
      industriesPc3
      industriesFaqCtaButton{
      industriesFaqCtaButtonLabel
      industriesFaqCtaButtonLink
      }
      industriesFaqs {
        industriesFaqAnswer
        industriesFaqQuestion
      }

    }
    
  }`
)

const detailedCaseStudyPageQuery = (slug) => `${getQueryWithSeoFields(
    `
    caseStudy(
    id: "/case-study/${slug}"
    idType: URI
  ) {
    `, `
             detailedCaseStudy {
                  #Banner Section
                  dcsBannerPc
                  
                  #Impact Numbers
                  dcsHeading1
                  dcsPc1
                  dcsImpactNumbers {
                    dcsHighlightNumber
                    dcsHighlightText
                  }
                  
                  #Client Review Section
                  dcsHeading2
                  dcsPc2
                  dcsClientIcon{
                    mediaItemUrl
                    altText
                  }
                  dcsClientName
                  dcsCompanyName
                  dcsClientDesignation
                  dcsClientReviewContent
                  
                  #Content Area
                  dcsCaseStudyContent {
                    dcsHeading3
                    dcsPc3
                    dcsImage{
                      mediaItemUrl
                      altText
                    }
                    dcsCtaButton {
                      dcsButtonLabel
                      dcsButtonLink
                    }
                  }
                }
                       
                ${seoDataSlugFields} 
                        
                        }
                       `
)}`

const detailedServicePageQuery = (slug) => `${getQueryWithSeoFields(
    `
            service(id: "${slug}",
             idType: SLUG) {
            `, `
                     seoServices{
              seoServicesBannerPc
              
              #Content With Side Image
              seoServicesHeading1
              seoServicesPc1
              seoServicesPc1Points {
                seoServicesPc1PointsDescription
                seoServicesPc1PointsName
              }
              seoServicesCtaButton1 {
                seoServicesButtonLabel1
                seoServicesButtonLink1
              }
              seoServicesImage1{
                mediaItemUrl
                altText
              }
              
              #Content With Left Image
              seoServicesImage2{
                mediaItemUrl
                altText
              }
              seoServicesHeading2
              seoServicesPc2
              seoServicesCtaButton2 {
                seoServicesButtonLabel2
                seoServicesButtonLink2
              }
              
              #Features Section
              seoServicesHeading3
              seoServicesPc3
              seoServicesCtaButton3 {
                seoServicesButtonLabel3
                seoServicesButtonLink3
              }
              seoServicesFeaturesComp {
                seoServicesFeatureDescription
                seoServicesFeatureName
              }
              
              #Key Offerings
              seoServicesHeading4
              seoServicesPc4
              seoServicesCtaButton4 {
                seoServicesButtonLabel4
                seoServicesButtonLink4
              }
              seoServicesOfferings {
                seoServicesOfferingIcon{
                  mediaItemUrl
                  altText
                }
                seoServicesOfferingPointDescription
                seoServicesOfferingPointName
              }
        
              #Alt. Content With Image
              seoServicesAltContentWithImage {
                seoServicesImage3{
                  mediaItemUrl
                  altText
                }
                seoServicesCtaButton5 {
                  seoServicesButtonLabel5
                  seoServicesButtonLink5
                }
                seoServicesHeading5
                seoServicesPc5
              }
              
              #Card Section
              seoServicesHeading6
              seoServicesPc6
              seoServicesCardCta{
              seoServicesCardCtaLabel
              seoServicesCardCtaLink
              }
              seoServicesCardComp {
                seoServicesCardDescription
                seoServicesCardName
                seoServicesCardIcon {
                  mediaItemUrl
                  altText
                }
                seoServicesCardPoints {
                  seoServicesCardBulletPoints
                }
              }
              
              # FAQ Section
              seoServicesHeading7
              seoServicesPc7
              seoServicesFaqCta{
              seoServicesFaqCtaButtonLabel
              seoServicesFaqCtaButtonLink
              }
              seoServicesFaqQuestionAnswer {
                seoServicesFaqAnswer
                seoServicesFaqQuestion
              }
              
            }
                       
                ${seoDataSlugFields} 
                        
                        }
                       `
)}`


const detailedConsultingServicesPageQuery = (slug) => `${getQueryWithSeoFields(
    `
   consultingService(id:"/consulting/${slug}", idType:URI){
            `, `
                 consultingServices{
                  #banner
                  consultingServicesBannerPc
                  
                  #Content With Side Image
                  consultingServicesHeading1
                  consultingServicesPc1
                  consultingServicesPc1Points {
                    consultingServicesPc1PointsDescription
                    consultingServicesPc1PointsName
                  }
                  consultingServicesCtaButton1 {
                    consultingServicesButtonLabel1
                    consultingServicesButtonLink1
                  }
                  consultingServicesImage1 {
                    mediaItemUrl
                    altText
                  }
                  
                  #Content With Left Image
                  consultingServicesImage2 {
                    mediaItemUrl
                    altText
                  }
                  consultingServicesHeading2
                  consultingServicesPc2
                  consultingServicesCtaButton2 {
                    consultingServicesButtonLabel2
                    consultingServicesButtonLink2
                  }
                  
                  #Features Section
                  consultingServicesHeading3
                  consultingServicesPc3
                  consultingServicesCtaButton3 {
                    consultingServicesButtonLabel3
                    consultingServicesButtonLink3
                  }
                  consultingServicesFeaturesComp {
                    consultingServicesFeatureDescription
                    consultingServicesFeatureName
                  }
                  
                  #Slider Section
                  consultingServicesHeading4
                  consultingServicesPc4
                  consultingServicesCtaButton4 {
                    consultingServicesButtonLabel4
                    consultingServicesButtonLink4
                  }
                  consultingServicesVerticalSlider {
                    consultingServicesVerticalSliderHeading
                    consultingServicesVerticalSliderPc
                    consultingServicesVerticalSliderImage{
                      mediaItemUrl
                      altText
                    }
                    consultingServicesVerticalSliderCtaButton{
                      consultingServicesVerticalSliderButtonLabel
                      consultingServicesVerticalSliderButtonLink
                    }
                  }
            
                  #Key Offerings
                  consultingServicesHeading5
                  consultingServicesPc5
                  consultingServicesCtaButton5 {
                    consultingServicesButtonLabel5
                    consultingServicesButtonLink5
                  }
                  consultingServicesOfferings {
                    consultingServicesOfferingPointDescription
                    consultingServicesOfferingPointName
                    consultingServicesOfferingIcon{
                      mediaItemUrl
                      altText
                    }
                  }
                  
                  #Card Section
                  consultingServicesHeading6
                  consultingServicesPc6
                  consultingServicesCardCta{
                  consultingServicesCardCtaLabel
                  consultingServicesCardCtaLink
                  }
                  consultingServicesCardComp {
                    consultingServicesCardDescription
                    consultingServicesCardName
                    consultingServicesCardIcon{
                      mediaItemUrl
                      altText
                    }
                    consultingServicesCardPoints{
                      consultingServicesCardBulletPoints
                    }
                  }
                  
                  
                  #faq
                  consultingServicesHeading7
                  consultingServicesPc7
                  consultingServicesFaqCtaButton{
                  consultingServicesFaqCtaButtonLabel
                  consultingServicesFaqCtaButtonLink
                  }
                  consultingServicesFaqQuestionAnswer{
                    consultingServicesFaqQuestion
                    consultingServicesFaqAnswer
                  }
                  
                }
                       
                ${seoDataSlugFields} 
                        
                        }
                       `
)}`


const detailedIndustryServicesPageQuery = (slug) => `${getQueryWithSeoFields(
  `
    industry(id:"/industries/${slug}", idType:URI){
          `, `
          industryServices{
            #banner
            industryServicesBannerPc
            
            # Content With Side Image
            industryServicesHeading1 
            industryServicesPc1 
            industryServicesPc1Points {
              industryServicesPc1PointsDescription
              industryServicesPc1PointsName
            } 
            industryServicesCtaButton1 {
              industryServicesButtonLabel1
              industryServicesButtonLink1
            } 
            industryServicesImage1 {
              mediaItemUrl
              altText
            } 
            
            #Content With Left Image
            industryServicesImage2 {
              mediaItemUrl
              altText
            } 
            industryServicesHeading2 
            industryServicesPc2 
            industryServicesCtaButton2 {
              industryServicesButtonLabel2
              industryServicesButtonLink2
            } 
            
            #Features Section
            industryServicesHeading3
            industryServicesPc3 
            industryServicesCtaButton3 {
              industryServicesButtonLabel3
              industryServicesButtonLink3
            } 
            industryServicesFeaturesComp {
              industryServicesFeatureDescription
              industryServicesFeatureName
            }
            
            #Key Offerings
            industryServicesHeading5 
            industryServicesPc5 
            industryServicesCtaButton5 {
              industryServicesButtonLabel5
              industryServicesButtonLink5
            } 
            industryServicesOfferings {
              industryServicesOfferingPointDescription
              industryServicesOfferingPointName
              industryServicesOfferingIcon {
                mediaItemUrl
                altText
              }
            } 
           
            
            #Slider Section
            industryServicesHeading4 
            industryServicesPc4 
            industryServicesCtaButton4 {
              industryServicesButtonLabel4
              industryServicesButtonLink4
            }
            
            #Vertical Slider
            industryServicesVerticalSlider {
              industryServicesVerticalSliderHeading
              industryServicesVerticalSliderPc
              industryServicesVerticalSliderImage{
                mediaItemUrl
                altText
              }
              industryServicesVerticalSliderCtaButton {
                industryServicesVerticalSliderButtonLabel
                industryServicesVerticalSliderButtonLink
              }
            }
            
            #Card Section
            industryServicesHeading6
            industryServicesPc6
            industryServicesCardCta{
            industryServicesCardCtaLabel
            industryServicesCardCtaLink
            }
            industryServicesCardComp {
              industryServicesCardDescription
              industryServicesCardName
              industryServicesCardIcon{
                mediaItemUrl
                altText
              }
              industryServicesCardPoints{
                industryServicesCardBulletPoints
              }
            }
            
            #Alt Content With Image
            industryServicesAltContentWithImage {
              industryServicesHeading7
              industryServicesPc7
              industryServicesCtaButton5 {
                industryServicesButtonLabel5
                industryServicesButtonLink5
              }
              industryServicesImage3{
                mediaItemUrl
                altText
              }
            }
            
            #FAQ Section
            industryServicesHeading8
            industryServicesPc8
            industryServicesFaqCtaButton{
            industryServicesFaqCtaButtonLabel
            industryServicesFaqCtaButtonLink
            }
            industryServicesFaqQuestionAnswer {
              industryServicesFaqAnswer
              industryServicesFaqQuestion
            }
      
          }
                     
              ${seoDataSlugFields} 
                      
                      }
                     `
)}`


/*
* Check Whole Pages fetching from server
* */
const wholePagesDataQuery = `
  pages{
     edges{
                              node{
                                title
                                slug
                                id
                                }
                                }
  }`



