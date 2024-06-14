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
        case registeredPages.CASE_STUDY:
            finalQuery = caseStudyPageQuery;
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
        default:
            finalQuery = homePageQuery;
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
                                  }
                                  serviceName
                                  serviceDescription
                                  servicePoints{
                                    servicePointName
                                  }

                                }
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
                                  ctaButtonLabel
                                  ctaButtonLink
                                    
                                    #seen on
                                  seenOnHeading
                                  seenOnImages{
                                    mediaItemUrl
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
                                          csHeading1
                                          csPc1
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
                                
                                    }  
                       } ${blogListQuery(3)}`
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
                          }
                          apImage{
                            mediaItemUrl
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
                        featuredImage{
                          node{
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




