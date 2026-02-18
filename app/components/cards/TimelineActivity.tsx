import { FolderTree, FileText, Wand2 } from "lucide-react";

interface TimelineActivity {
    type: 'context' | 'flashcard' | 'insight';
    text: string;
    time?: string;
  }
  
interface TimelineGroup {
date: string;
activities: TimelineActivity[];
}

const timelineData: TimelineGroup[] = [
    {
      date: 'Today',
      activities: [
        { type: 'context', text: 'Created context "Git Commands"' },
        { type: 'flashcard', text: 'Added flashcard "git add"' },
        { type: 'insight', text: 'Generated AI insight for "git add"' },
      ]
    },
    {
      date: 'Yesterday',
      activities: [
        { type: 'context', text: 'Created context "Cooking"' },
        { type: 'flashcard', text: 'Added flashcard "chicken recipe"' },
        { type: 'insight', text: 'Generated AI insight for recipe' },
      ]
    },
    {
      date: 'Feb 8, 2026',
      activities: [
        { type: 'flashcard', text: 'Added flashcard "git commit"' },
        { type: 'insight', text: 'Generated AI insight for commit' },
      ]
    }
];

const getActivityIcon = (type: TimelineActivity['type']) => {
    const iconClass = "w-3 h-3";
    switch (type) {
      case 'context':
        return <FolderTree className={`${iconClass} text-[#3590ff]`} />;
      case 'flashcard':
        return <FileText className={`${iconClass} text-green-500`} />;
      case 'insight':
        return <Wand2 className={`${iconClass} text-purple-500`} />;
    }
};

const getActivityColor = (type: TimelineActivity['type']) => {
    switch (type) {
        case 'context':
        return 'bg-[#3590ff]';
        case 'flashcard':
        return 'bg-green-500';
        case 'insight':
        return 'bg-purple-500';
        default:
        return 'bg-gray-400';
    }
};

const getActivityBgColor = (type: TimelineActivity['type']) => {
    switch (type) {
        case 'context':
        return 'bg-[#3590ff]/10';
        case 'flashcard':
        return 'bg-green-500/10';
        case 'insight':
        return 'bg-purple-500/10';
        default:
        return 'bg-gray-400/10';
    }
};
export default function TimelineActivity() {
    return (
        <div className="max-h-[450px] max-w-[588px] mt-6 p-5 bg-gray-50 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-sm font-semibold text-gray-900">Timeline</h4>
            <div className="flex gap-1 bg-white rounded-lg p-1 border border-gray-200">
              <button className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-900 rounded">Day</button>
              <button className="px-3 py-1 text-xs font-medium text-gray-600 rounded hover:bg-gray-50">Week</button>
              <button className="px-3 py-1 text-xs font-medium text-gray-600 rounded hover:bg-gray-50">Month</button>
            </div>
          </div>
    
          <div className="relative max-h-[164px] overflow-auto">
            {/* Timeline Items */}
            <div className="relative space-y-6">
              {/* Wavy Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5">
                <svg className="w-full h-full" viewBox="0 0 2 1000" preserveAspectRatio="none">
                  <path
                    d="M 1 0 Q 1.3 5 1 10 Q 0.7 15 1 20 Q 1.3 25 1 30 Q 0.7 35 1 40 Q 1.3 45 1 50 Q 0.7 55 1 60 Q 1.3 65 1 70 Q 0.7 75 1 80 Q 1.3 85 1 90 Q 0.7 95 1 100 Q 1.3 105 1 110 Q 0.7 115 1 120 Q 1.3 125 1 130 Q 0.7 135 1 140 Q 1.3 145 1 150 Q 0.7 155 1 160 Q 1.3 165 1 170 Q 0.7 175 1 180 Q 1.3 185 1 190 Q 0.7 195 1 200 Q 1.3 205 1 210 Q 0.7 215 1 220 Q 1.3 225 1 230 Q 0.7 235 1 240 Q 1.3 245 1 250 Q 0.7 255 1 260 Q 1.3 265 1 270 Q 0.7 275 1 280 Q 1.3 285 1 290 Q 0.7 295 1 300 Q 1.3 305 1 310 Q 0.7 315 1 320 Q 1.3 325 1 330 Q 0.7 335 1 340 Q 1.3 345 1 350 Q 0.7 355 1 360 Q 1.3 365 1 370 Q 0.7 375 1 380 Q 1.3 385 1 390 Q 0.7 395 1 400 Q 1.3 405 1 410 Q 0.7 415 1 420 Q 1.3 425 1 430 Q 0.7 435 1 440 Q 1.3 445 1 450 Q 0.7 455 1 460 Q 1.3 465 1 470 Q 0.7 475 1 480 Q 1.3 485 1 490 Q 0.7 495 1 500 Q 1.3 505 1 510 Q 0.7 515 1 520 Q 1.3 525 1 530 Q 0.7 535 1 540 Q 1.3 545 1 550 Q 0.7 555 1 560 Q 1.3 565 1 570 Q 0.7 575 1 580 Q 1.3 585 1 590 Q 0.7 595 1 600 Q 1.3 605 1 610 Q 0.7 615 1 620 Q 1.3 625 1 630 Q 0.7 635 1 640 Q 1.3 645 1 650 Q 0.7 655 1 660 Q 1.3 665 1 670 Q 0.7 675 1 680 Q 1.3 685 1 690 Q 0.7 695 1 700 Q 1.3 705 1 710 Q 0.7 715 1 720 Q 1.3 725 1 730 Q 0.7 735 1 740 Q 1.3 745 1 750 Q 0.7 755 1 760 Q 1.3 765 1 770 Q 0.7 775 1 780 Q 1.3 785 1 790 Q 0.7 795 1 800 Q 1.3 805 1 810 Q 0.7 815 1 820 Q 1.3 825 1 830 Q 0.7 835 1 840 Q 1.3 845 1 850 Q 0.7 855 1 860 Q 1.3 865 1 870 Q 0.7 875 1 880 Q 1.3 885 1 890 Q 0.7 895 1 900 Q 1.3 905 1 910 Q 0.7 915 1 920 Q 1.3 925 1 930 Q 0.7 935 1 940 Q 1.3 945 1 950 Q 0.7 955 1 960 Q 1.3 965 1 970 Q 0.7 975 1 980 Q 1.3 985 1 990 Q 0.7 995 1 1000"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-gray-300"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
              {timelineData.map((group, groupIndex) => (
                <div key={groupIndex} className="relative">
                  <h5 className="text-xs font-bold text-gray-900 mb-3 ml-8">{group.date}</h5>
                  <div className="space-y-3 ml-8">
                    {group.activities.map((activity, activityIndex) => (
                      <div
                        key={activityIndex}
                        className="relative flex items-start gap-3 group cursor-pointer hover:bg-white/50 rounded-lg p-2 -ml-2 transition-colors"
                      >
                        {/* Timeline Dot */}
                        <div className={`absolute -left-6 top-2 w-2 h-2 rounded-full ${getActivityColor(activity.type)} border-2 border-white shadow-sm`} />
                        
                        {/* Activity Content */}
                        <div className="flex items-center gap-2 flex-1">
                          <div className={`w-5 h-5 rounded flex items-center justify-center ${getActivityBgColor(activity.type)}`}>
                            {getActivityIcon(activity.type)}
                          </div>
                          <span className="text-xs text-gray-700 group-hover:text-gray-900">{activity.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}