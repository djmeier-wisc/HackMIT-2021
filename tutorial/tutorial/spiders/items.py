import scrapy


class QuotetutorialItem(scrapy.Item):
    title = scrapy.Field()
    deadline = scrapy.Field()
