firebase use mc-v4-prod && \
firebase deploy --only functions:webMainProductionSSRHandler && \
firebase target:clear hosting prod && \
firebase target:apply hosting prod production-web-main && \
firebase deploy --only hosting:prod
