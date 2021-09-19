import scrapy

class QuotetutorialItem(scrapy.Item):
    title = scrapy.Field()
    deadline = scrapy.Field()
    description = scrapy.Field()
    link = scrapy.Field()
class QuotesSpider(scrapy.Spider):
    name = "scholar"
    start_urls = [
        'https://scholarshipamerica.org/students/browse-scholarships/',
        'https://scholarshipamerica.org/students/browse-scholarships/?fwp_paged=2',
        'https://scholarshipamerica.org/students/browse-scholarships/?fwp_paged=3',
        'https://scholarshipamerica.org/students/browse-scholarships/?fwp_paged=4',
        'https://scholarshipamerica.org/students/browse-scholarships/?fwp_paged=5',
        'https://scholarshipamerica.org/students/browse-scholarships/?fwp_paged=6',
        'https://scholarshipamerica.org/students/browse-scholarships/?fwp_paged=7',
    ]

    def parse(self, response):
        items = QuotetutorialItem()
        all_div_items = response.css('.scholarship h3::text')
        count = 0
        for itemshit in all_div_items:
            title = response.css('.scholarship h3::text')[count].extract()
            deadline = response.css('strong::text')[count].extract()
            description = response.css('.info p::text')[count].extract()
            link = response.css('.text-btn::attr(href)')[count].extract()
            count+=1
        #fo quote in response.css('div.quote'):
            items['title'] = title
            items['deadline'] = deadline 
            items['description'] = description
            items['link'] = link
            yield items
