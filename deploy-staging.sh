firebase use mc-v4-prod && \
firebase deploy --only functions:webMainStagingSSRHandler && \
firebase target:clear hosting prod && \
firebase target:apply hosting prod staging-web-main && \
firebase deploy --only hosting:prod
