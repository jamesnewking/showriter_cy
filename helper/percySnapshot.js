module.exports = (snapshotName) => {
    cy.percySnapshot( snapshotName , { 
        percyCSS: `section.Animate {opacity: 1} 
        div.Animate {opacity: 1} 
        div.AnimateOnLoad {opacity: 1} 
        div.RecentArticles {opacity: 0} 
        div.CollectionCarousel.Animate--fade-in {display: none}
        iframe#preview-bar-iframe {opacity: 0}`});
}//section[data-section-type="INF-CollectionCarousel"].Section {opacity: 0} 